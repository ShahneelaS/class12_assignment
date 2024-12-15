import React from "react";
import Image from "next/image";
import logo from "/public/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-[#043873] px-[220px] py-[140px]">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[60px] max-w-[1480px] mx-auto">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start">
          <Image src={logo} alt="Whitepace Logo" width={191} height={34} />
          <p
            className="mt-6 text-[#F7F7EE] text-[18px] font-[400] font-inter leading-[30px] tracking-[-0.02em] text-left"
            style={{
              maxWidth: "240px", 
              height: "120px", 
              lineHeight: "30px", 
              overflow: "hidden", 
              display: "-webkit-box",
              WebkitLineClamp: 4, 
              WebkitBoxOrient: "vertical", 
              wordBreak: "break-word", 
            }}
          >
            Whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        {/* Product Section */}
        <div>
          <h4 className="text-white text-[18px] font-bold mb-4">Product</h4>
          <ul className="space-y-3">
            <li className="text-[#FFE492] text-[16px]">Overview</li>
            <li className="text-white text-[16px]">Pricing</li>
            <li className="text-white text-[16px]">Customer stories</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-white text-[18px] font-bold mb-4">Resources</h4>
          <ul className="space-y-3">
            <li className="text-white text-[16px]">Blog</li>
            <li className="text-white text-[16px]">Guide & Tutorials</li>
            <li className="text-white text-[16px]">Help Center</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-white text-[18px] font-bold mb-4">Company</h4>
          <ul className="space-y-3">
            <li className="text-white text-[16px]">About Us</li>
            <li className="text-white text-[16px]">Career</li>
            <li className="text-white text-[16px]">Media Kit</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-[#F7F7EE] text-[16px] text-center">
        ©2021 Whitepace LLC.
      </div>
    </footer>
  );
};

export default Footer;
