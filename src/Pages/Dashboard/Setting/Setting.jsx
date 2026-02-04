import React, { useState } from "react";
import { Lock, Sun, Moon, Mail, LogOut } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, signOut } from "firebase/auth";

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    toast.info(`Theme switched to ${!darkMode ? "Dark" : "Light"} mode`);
  };

  const handleEmailToggle = () => {
    setEmailNotif(!emailNotif);
    toast.info(`Email notifications ${!emailNotif ? "enabled" : "disabled"}`);
  };

  const handleChangePassword = () => {
    toast.info("Password change feature coming soon!");
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error(error);
        toast.error("Logout failed!");
      });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} />

      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-50 text-primary w-12 h-12 flex items-center justify-center rounded-xl shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-blue-800">Settings</h1>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4">
          {/* Change Password */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Lock className="text-primary w-6 h-6" />
              <p className="font-medium">Change Password</p>
            </div>
            <button
              onClick={handleChangePassword}
              className="px-4 py-1 rounded-xl bg-primary text-white hover:opacity-90"
            >
              Change
            </button>
          </div>

          {/* Dark/Light Mode demo */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="text-primary w-6 h-6" />
              ) : (
                <Sun className="text-primary w-6 h-6" />
              )}
              <p className="font-medium">Dark Mode</p>
            </div>
            <button
              onClick={handleDarkModeToggle}
              className="px-4 py-1 rounded-xl border hover:bg-gray-100"
            >
              {darkMode ? "On" : "Off"}
            </button>
          </div>

          {/* Email Notifications demo */}
          <div className="flex items-center justify-between p-4 border rounded-xl">
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-6 h-6" />
              <p className="font-medium">Email Notifications</p>
            </div>
            <button
              onClick={handleEmailToggle}
              className="px-4 py-1 rounded-xl border hover:bg-gray-100"
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
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-xl bg-red-500 text-white hover:opacity-90"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
