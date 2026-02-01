import React from "react";
import { Link, NavLink } from "react-router";
import { FaPlus } from "react-icons/fa";
import { CopyPlus, HousePlus } from "lucide-react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-600"
      : "text-gray-700 hover:text-blue-500 transition-colors";

  return (
    <div className="navbar shadow-md sticky top-0 z-50 ">
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 container mx-auto px-4 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="navbar-start flex items-center gap-3">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            <li className="border-2 border-gray-100">
              <NavLink to="/" className={linkClass}>
                <HousePlus className="w-4 h-4" /> Home
              </NavLink>
            </li>
            <li className="border-2 border-gray-100">
              <NavLink to="" className={linkClass}>
                <CopyPlus className="w-4 h-4" /> Join as Employee
              </NavLink>
            </li>
            <li className="border-2 border-gray-100">
              <NavLink to="" className={linkClass}>
                <CopyPlus className="w-4 h-4" /> Join as HR Manager
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT: Login / Avatar UI (dummy) */}
        <div className="navbar-end flex items-center gap-2">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-1 px-4 py-1 border-2 border-blue-700 text-blue-700 font-semibold rounded-sm transition-colors duration-300
              ${isActive ? "bg-blue-700 text-white" : "hover:bg-green-50"}`
            }
          >
            Login <FaPlus className="w-4 h-4" />
          </NavLink>
        </div>

        {/* MOBILE MENU */}
        <div className="navbar-end lg:hidden">
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
              <li>
                <NavLink to="/challenges" className={linkClass}>
                  Challenges
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-activities" className={linkClass}>
                  Add Challenges
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
