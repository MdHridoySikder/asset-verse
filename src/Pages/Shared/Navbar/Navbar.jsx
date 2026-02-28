import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { FaPlus, FaChevronDown } from "react-icons/fa";

import {
  CopyPlus,
  HousePlus,
  LayoutDashboard,
  LogOut,
  LucideBuilding2,
} from "lucide-react";
import avatarImg from "/client3.png";
import UseAuth from "../../../Hooks/UseAuth";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Persistent dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-600"
      : "text-gray-700 hover:text-blue-500 transition-colors";

  const handleThemeToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.setAttribute(
        "data-theme",
        newMode ? "dark" : "light",
      );
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className="navbar shadow-md sticky top-0 z-50 bg-base-100">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-700 shadow-lg">
            <img
              src="/Logo2.png"
              alt="AssetVerse Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <NavLink
            to="/"
            className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500"
          >
            AssetVerse
          </NavLink>
        </div>

        {/* CENTER: Menu */}
        <div className="hidden lg:flex gap-4">
          <NavLink to="/" className={linkClass}>
            <HousePlus className="w-4 h-4 inline mr-1" /> Home
          </NavLink>
          <span className="text-gray-400">|</span>
          <NavLink to="/AboutUs" className={linkClass}>
            <LucideBuilding2 className="w-4 h-4 inline mr-1" /> About Us
          </NavLink>
          <span className="text-gray-400">|</span>
          {user ? (
            <NavLink to="/dashboard" className={linkClass}>
              <LayoutDashboard className="w-4 h-4 inline mr-1" /> Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to="/register" className={linkClass}>
                <CopyPlus className="w-4 h-4 inline mr-1" /> Join as Employee
              </NavLink>
              <span className="text-gray-400">|</span>
              <NavLink to="/hrregister" className={linkClass}>
                <CopyPlus className="w-4 h-4 inline mr-1" /> Join as HR Manager
              </NavLink>
            </>
          )}
        </div>

        {/* RIGHT SIDE: Avatar + Theme Toggle */}
        <div className="flex items-center gap-3 relative">
          {/* THEME TOGGLE */}
          <label className="toggle swap swap-rotate mr-3">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleThemeToggle}
            />
            {/* Sun */}
            <svg
              className="swap-off w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>
            {/* Moon */}
            <svg
              className="swap-on w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          {/* Avatar */}
          {user ? (
            <div className="relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-full px-3 py-1 hover:shadow-md transition"
              >
                <img
                  src={user.photoURL ? user.photoURL : avatarImg}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block font-semibold text-secondary">
                  {user.displayName ? user.displayName : "MHS"}
                </span>

                <FaChevronDown
                  className={`ml-1 text-gray-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-44 border shadow-lg rounded-lg overflow-hidden text-sm z-50">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <LayoutDashboard className="w-4 h-4 text-blue-600" />{" "}
                    Dashboard
                  </Link>

                  <Link
                    to="dashboard/my-profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <CgProfile className="h-5 w-5 text-primary" />
                    Profile
                  </Link>
                  <Link
                    to="dashboard/settings"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoSettingsOutline className="h-5 w-5 text-primary" />
                    Settings
                  </Link>

                  <div
                    onClick={() => {
                      logOut();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition cursor-pointer text-red-600 font-medium"
                  >
                    <LogOut className="text-red-600 w-5 h-5" /> Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-1 px-4 py-1 border border-blue-600 text-blue-700 font-semibold rounded-sm transition-colors duration-300
        ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-100"}`
              }
            >
              Login <FaPlus className="w-4 h-4" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
