import React, { useState, useEffect } from "react";
import { Lock, Sun, Moon, Mail, LogOut } from "lucide-react";
import UseAuth from "../../../Hooks/UseAuth"; // Auth import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Setting = () => {
  const { logOut } = UseAuth(); // logout function
  const [emailNotif, setEmailNotif] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setDarkMode(savedTheme === "dark");
  }, []);

  // Theme toggle
  const handleThemeToggle = () => {
    const newTheme = darkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDarkMode(!darkMode);
    toast.info(`${newTheme} mode enabled`);
  };

  const handleEmailToggle = () => {
    setEmailNotif((prev) => {
      toast.info(`Email notifications ${!prev ? "enabled" : "disabled"}`);
      return !prev;
    });
  };

  const handleChangePassword = () => {
    toast.info("Password change feature coming soon!");
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        window.location.href = "/login"; // redirect to login page
      })
      .catch((err) => {
        toast.error("Logout failed!");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />

      <div className="p-6 space-y-6 min-h-screen bg-base-200 transition-all">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-base-100 text-primary w-15 h-15 flex items-center justify-center rounded-xl shadow-md">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="heading-db  font-bold text-primary">Settings</h1>
        </div>

        {/* Settings Card */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 flex flex-col gap-4">
          {/* Change Password */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Lock className="text-primary w-6 h-6" />
              <p className="font-medium">Change Password</p>
            </div>
            <button
              onClick={handleChangePassword}
              className="btn btn-primary btn-sm"
            >
              Change
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="text-primary w-6 h-6" />
              ) : (
                <Sun className="text-primary w-6 h-6" />
              )}
              <p className="font-medium">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </p>
            </div>

            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleThemeToggle}
              />

              {/* Sun */}
              <Sun className="swap-off w-7 h-7" />

              {/* Moon */}
              <Moon className="swap-on w-7 h-7" />
            </label>
          </div>

          {/* Email Notifications */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-6 h-6" />
              <p className="font-medium">Email Notifications</p>
            </div>
            <button
              onClick={handleEmailToggle}
              className="btn btn-outline btn-sm"
            >
              {emailNotif ? "On" : "Off"}
            </button>
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <LogOut className="text-primary w-6 h-6" />
              <p className="font-medium">Logout</p>
            </div>
            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
