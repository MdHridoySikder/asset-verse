import { CopyPlus, HousePlus } from "lucide-react";
import React from "react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { PiAddressBookThin } from "react-icons/pi";

import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-blue-100 via-white to-blue-100 container text-black py-8">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo + Description */}

        <div>
          <div className=" flex items-center gap-1">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-700">
              <img
                src="/Logo.png"
                alt="AssetVerse"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logo Text */}
            <NavLink
              to="/"
              className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500"
            >
              AssetVerse
            </NavLink>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-extrabold text-blue-500 mb-5">
            Quick Links
          </h4>

          <ul className="menu menu-horizontal px- gap-3">
            <div className="border-2 border-gray-200">
              <li>
                <Link to="/">
                  <HousePlus className="w-4 h-4" />
                  Home
                </Link>
              </li>
            </div>
            <div className="border-2 border-gray-200">
              <li>
                <Link>
                  <CopyPlus className="w-4 h-4" />
                  Join as Employee
                </Link>
              </li>
            </div>
            <div className="border-2 border-gray-200 ">
              <li>
                <Link>
                  <CopyPlus className="w-4 h-4" />
                  Join as HR Manager
                </Link>
              </li>
            </div>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start md:items-center">
          <h4 className="text-lg font-extrabold  text-blue-500 mb-8">
            Follow Us
          </h4>

          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all transform hover:scale-110 shadow-md"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all transform hover:scale-110 shadow-md"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all transform hover:scale-110 shadow-md"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-extrabold text-blue-500 mb-5">
            Contact Info
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <MdEmail /> assetverse@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <BiPhoneIncoming /> +880 1234-567890
            </li>
            <li className="flex items-center gap-3">
              <PiAddressBookThin /> Chattogram, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800  mt-12 pt-4 text-center text-sm text-gray-500">
        © 2026 EcoTrack | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
