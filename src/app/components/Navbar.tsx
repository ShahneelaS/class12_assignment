"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full h-auto bg-[#043873] py-4 px-6 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" width={150} height={30} />
        </div>

        {/* Hamburger Menu - Visible on Small Screens */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#043873] lg:bg-transparent z-10`}
        >
          <div className="lg:flex lg:items-center">
            {/* Navigation Links */}
            <ul className="text-white text-base lg:text-lg font-semibold flex flex-col lg:flex-row lg:gap-8 py-4 lg:py-0 px-6 lg:px-0">
              <li className="hover:text-[#FFE492] cursor-pointer">Products</li>
              <li className="hover:text-[#FFE492] cursor-pointer">Services</li>
              <li className="hover:text-[#FFE492] cursor-pointer">Resources</li>
              <li className="hover:text-[#FFE492] cursor-pointer">Contact</li>
            </ul>

            {/* Login Button */}
            <div className="flex justify-center lg:ml-8 mt-4 lg:mt-0">
              <button className="py-2 px-6 rounded-lg bg-[#FFE492] font-semibold">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
