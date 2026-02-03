import { CopyPlus, HousePlus, LayoutDashboard } from "lucide-react";
import React from "react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiAddressBookThin } from "react-icons/pi";
import { Link, NavLink } from "react-router";
import UseAuth from "../../../Hooks/UseAuth";

const Footer = () => {
  const { user } = UseAuth();

  return (
    <footer className="bg-gradient-to-br from-blue-100 via-blue-50 to-blue-50 text-black pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-6">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-700">
              <img
                src="/Logo.png"
                alt="AssetVerse"
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

          <p className="mt-3 text-sm text-gray-600 max-w-xs leading-relaxed">
            A smart asset management platform to track, assign, and manage
            company assets with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-extrabold text-blue-500 mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <HousePlus className="w-4 h-4" /> Home
              </Link>
            </li>

            {/* Show Dashboard if user logged in, else show Join links */}
            {user ? (
              <li>
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2 hover:text-blue-600"
                >
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </NavLink>
              </li>
            ) : (
              <>
                <li>
                  <Link className="flex items-center gap-2 hover:text-blue-600">
                    <CopyPlus className="w-4 h-4" /> Join as Employee
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2 hover:text-blue-600">
                    <CopyPlus className="w-4 h-4" /> Join as HR Manager
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-bold text-blue-600 mb-5">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-600">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-extrabold text-blue-500 mb-5">
            Follow Us
          </h4>
          <div className="flex gap-5 text-xl">
            <a className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact */}
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

      {/* Bottom */}
      <div className="border-t border-blue-200 mt-12 py-4 text-center text-sm text-gray-600">
        © 2026 <span className="font-semibold">AssetVerse</span> | All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
