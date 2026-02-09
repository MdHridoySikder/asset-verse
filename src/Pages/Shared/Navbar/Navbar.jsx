import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaPlus, FaChevronDown } from "react-icons/fa";

import { CopyPlus, HousePlus, LayoutDashboard, LogOut } from "lucide-react";
import avatarImg from "/client3.png";
import UseAuth from "../../../Hooks/UseAuth";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-600"
      : "text-gray-700 hover:text-blue-500 transition-colors";

  return (
    <div className="navbar shadow-md sticky top-0 z-50 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-700 shadow-lg">
            <img
              src="/Logo.png"
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

          {user ? (
            <NavLink to="/dashboard" className={linkClass}>
              <LayoutDashboard className="w-4 h-4 inline mr-1" /> Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to="/register" className={linkClass}>
                <CopyPlus className="w-4 h-4 inline mr-1" /> Join as Employee
              </NavLink>
              <NavLink to="/hrregister" className={linkClass}>
                <CopyPlus className="w-4 h-4 inline mr-1" /> Join as HR Manager
              </NavLink>
            </>
          )}
        </div>

        {/*righat / Avatar */}
        <div className="flex items-center gap-3 relative">
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
                <span className="hidden md:block font-semibold text-blue-600">
                  {user.displayName ? user.displayName : "MHS"}
                </span>

                <FaChevronDown
                  className={`ml-1 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden text-sm z-50">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <LayoutDashboard className="w-4 h-4 text-blue-600" />{" "}
                    Dashboard
                  </Link>

                  <Link
                    to="dashboard/my-profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <CgProfile className="h-5 w-5" />
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
                `flex items-center gap-1 px-4 py-1 border-2 border-gray-200 text-blue-700 font-semibold rounded-sm transition-colors duration-300
        ${isActive ? "bg-blue-700 text-white" : "hover:bg-green-50"}`
              }
            >
              Login <FaPlus className="w-4 h-4" />
            </NavLink>
          )}
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>

              {user ? (
                <li>
                  <NavLink to="/dashboard" className={linkClass}>
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className={linkClass}>
                      Join as Employee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hrregister" className={linkClass}>
                      Join as HR Manager
                    </NavLink>
                  </li>
                </>
              )}

              {!user && (
                <li>
                  <NavLink to="/login" className={linkClass}>
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
