import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { FaPlus, FaChevronDown, FaNewspaper } from "react-icons/fa";

import {
  CopyPlus,
  HousePlus,
  LayoutDashboard,
  LogOut,
  LucideBuilding2,
  LucideLogOut,
} from "lucide-react";
import avatarImg from "/client3.png";
import UseAuth from "../../../Hooks/UseAuth";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { SiMicrodotblog } from "react-icons/si";
import { RiLogoutCircleRLine } from "react-icons/ri";

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
      : "text-secondary hover:text-blue-500 transition-colors";

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
        <div className="hidden lg:flex gap-4 ">
          <NavLink to="/" className={linkClass}>
            <HousePlus className="w-4 h-4 inline mr-1 " /> Home
          </NavLink>
          <span className="text-gray-400">|</span>
          {user ? (
            <NavLink to="/blog" className={linkClass}>
              <SiMicrodotblog className="w-4 h-4 inline mr-1" /> Blog
            </NavLink>
          ) : (
            <>
              <NavLink to="/AboutUs" className={linkClass}>
                <LucideBuilding2 className="w-4 h-4 inline mr-1" /> About Us
              </NavLink>
            </>
          )}

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
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <HousePlus className="h-5 w-5 text-primary" />
                    Home
                  </Link>
                  <Link
                    to="/blog"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-500 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <SiMicrodotblog className="h-5 w-5 text-primary" />
                    Blog
                  </Link>
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
          {/* THEME TOGGLE */}
          <label className="swap swap-rotate text-base-content">
            {/* Controlled checkbox */}
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleThemeToggle}
            />

            {/* Sun icon */}
            <svg
              className="swap-off h-6 w-6 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-on h-6 w-6 fill-current text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* MOBILE MENU: Only for small screens */}
        <div className="lg:hidden relative">
          {!user && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-bold px-2 py-1 hover:bg-gray-600 rounded-full"
            >
              ⋮
            </button>
          )}

          {/* Dropdown menu for mobile */}
          {isOpen && !user && (
            <div className="absolute right-0 mt-2 w-15 border border-blue-700 shadow-lg rounded-lg overflow-hidden text-sm  z-50 text-secondary">
              <NavLink
                to="/"
                className="block px-4 py-2 hover:bg-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                <HousePlus className="h-5 w-5 " />
              </NavLink>
              <NavLink
                to="/AboutUs"
                className="block px-4 py-2 hover:bg-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                <LucideBuilding2 className="h-5 w-5 " />
              </NavLink>

              <NavLink
                to="/register"
                className="block px-4 py-2 hover:bg-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                <CopyPlus className="w-4 h-4 inline mr-1" />
              </NavLink>
              <NavLink
                to="/hrregister"
                className="block px-4 py-2 hover:bg-gray-600 transition"
                onClick={() => setIsOpen(false)}
              >
                <CopyPlus className="w-4 h-4 inline mr-1" />
              </NavLink>
              <NavLink
                to="/login"
                className="block px-4 py-2 hover:bg-gray-600 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                <RiLogoutCircleRLine className="w-5 h-5  inline mr-1 text-red-600" />
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
