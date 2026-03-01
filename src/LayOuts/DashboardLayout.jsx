import React, { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegAddressCard } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoAnalyticsSharp, IoSettingsOutline } from "react-icons/io5";
import { MdUpdate } from "react-icons/md";
import { MdWebAsset } from "react-icons/md";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { SiGoogleadmob } from "react-icons/si";

import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const { role } = useRole();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 second loader
    return () => clearTimeout(timer);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-bold text-blue-600 bg-blue-100 rounded-lg"
      : "text-secondary hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors";

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 border-8 border-t-primary border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-primary">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* main container */}
      <div className="drawer-content flex flex-col ">
        <div className="drawer-content flex flex-col ">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-5">
            <div className="lg:hidden p-4">
              <label
                htmlFor="my-drawer-4"
                className="btn btn-outline btn-primary drawer-button"
              >
                ☰ Menu
              </label>
            </div>
          </div>

          <Outlet />
        </div>
      </div>

      {/* sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="w-64 min-h-full flex flex-col bg-base-100">
          {/* sidebar logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3 px-6 py-5 border-b border-base-300"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-700 shadow-lg bg-white/20 backdrop-blur-sm">
              <img
                src="/Logo2.png"
                alt="AssetVerse Logo"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500">
              AssetVerse
            </span>
          </NavLink>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-6 my-2"></div>

          <ul className="menu p-4 text-base-content gap-1.5">
            {/* Admin Dashboard */}
            <li>
              <NavLink to="analytics" className={linkClass}>
                <IoAnalyticsSharp className="h-5 w-5" />
                Analytics
              </NavLink>
            </li>
            {role === "admin" && (
              <>
                <li>
                  <NavLink to="asset-list" className={linkClass}>
                    <FaRegListAlt className="h-4 w-4" />
                    Asset List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="add-asset" className={linkClass}>
                    <MdOutlineLibraryAdd className="h-5 w-5" />
                    Add Asset
                  </NavLink>
                </li>
                <li>
                  <NavLink to="all-requests" className={linkClass}>
                    <LiaClipboardListSolid className="h-5 w-5" />
                    All Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="my-employee-list" className={linkClass}>
                    <FaRegAddressCard className="h-5 w-5" />
                    My Employee List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="hrlist" className={linkClass}>
                    <SiGoogleadmob className="h-5 w-5" />
                    HR Join Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="upgrade-package" className={linkClass}>
                    <MdUpdate className="h-5 w-5" />
                    Upgrade Package
                  </NavLink>
                </li>
              </>
            )}

            {/* Employee Dashboard */}
            <li>
              <NavLink to="my-assets" className={linkClass}>
                <MdWebAsset className="h-5 w-5" />
                My Assets
              </NavLink>
            </li>
            <li>
              <NavLink to="request-an-asset" className={linkClass}>
                <IoGitPullRequestSharp />
                Request An Asset
              </NavLink>
            </li>
            {role === "admin" && (
              <li>
                <NavLink to="my-team" className={linkClass}>
                  <RiTeamFill className="h-5 w-5" />
                  My Team
                </NavLink>
              </li>
            )}

            <div className="border-b border-blue-300 my-4"></div>

            <li>
              <NavLink to="my-profile" className={linkClass}>
                <CgProfile className="h-5 w-5" />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="settings" className={linkClass}>
                <IoSettingsOutline className="h-5 w-5" />
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
