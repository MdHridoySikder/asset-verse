import React from "react";
import { Link, Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* Page Content */}
        <Outlet />
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="w-64 min-h-full bg-blue-50 flex flex-col">
          {/* 🔥 SIDEBAR LOGO (TOP) */}
          <NavLink
            to="/"
            className="flex items-center gap-3 px-6 py-5 border-b border-base-300"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-700 shadow-lg">
              <img
                src="/Logo.png"
                alt="AssetVerse Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500">
              AssetVerse
            </span>
          </NavLink>

          {/* SIDEBAR MENU */}
          <ul className="menu p-4 text-base-content gap-1">
            <p className="text-blue-700 font-bold text-xl">Hr Dashboard</p>
            <li>
              <NavLink to="asset-list">Asset List</NavLink>
            </li>
            <li>
              <NavLink to="add-asset">Add Asset</NavLink>
            </li>
            <li>
              <NavLink
                to="Allrequests
"
              >
                All Requests
              </NavLink>
            </li>
            <li>
              <NavLink to="add-asset">Add Asset</NavLink>
            </li>
            <li>
              <NavLink to="add-asset">Add Asset</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/settings">⚙️ Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
