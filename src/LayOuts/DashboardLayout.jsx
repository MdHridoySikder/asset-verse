import React from "react";
import { Link, Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-600 bg-blue-100 rounded-lg"
      : "text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* main containet*/}
      <div className="drawer-content flex flex-col">
        {/* Page Content */}
        <Outlet />
      </div>

      {/* sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="w-64 min-h-full bg-blue-50 flex flex-col">
          {/*sidebar logo */}
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
          {/* Divider line */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-6 my-2"></div>

          {/* sidebar menu */}
          <ul className="menu p-4 text-base-content gap-1">
            <p className="text-blue-700 font-bold text-xl mb-2">Hr Dashboard</p>

            <li>
              <NavLink to="asset-list" className={linkClass}>
                Asset List
              </NavLink>
            </li>

            <li>
              <NavLink to="add-asset" className={linkClass}>
                Add Asset
              </NavLink>
            </li>

            <li>
              <NavLink to="all-requests" className={linkClass}>
                All Requests
              </NavLink>
            </li>

            <li>
              <NavLink to="my-employee-list" className={linkClass}>
                My Employee List
              </NavLink>
            </li>

            <li>
              <NavLink to="upgrade-package" className={linkClass}>
                Upgrade Package
              </NavLink>
            </li>

            <div className="border-b border-blue-300 my-4"></div>

            <li>
              <NavLink to="my-profile" className={linkClass}>
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/settings" className={linkClass}>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
