import React from "react";
import { FaYoutube, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-dotted border-[#626262]/50 text-gray-300 text-sm">
      <div className="flex justify-between items-center px-8 py-3">
        {/* Left side links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            Help & Support
          </a>
          <a href="#" className="hover:text-white transition">
            Report an Issue
          </a>
        </div>

        {/* Center text */}
        <div className="text-gray-400 text-sm">
          © 2025 <span className="text-white font-semibold">Master<span className="text-orange-400">Ji</span></span>. All rights reserved.
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4 text-lg">
          <a href="#" className="hover:text-orange-400 transition">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
