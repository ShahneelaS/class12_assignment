import React from "react";
import Image from "next/image";
import apple from "/public/Apple.png";
import Microsoft from "/public/Microsoft.png";
import Slack from "/public/Slack.png";
import Google from "/public/Google.png";

const SponsorsSection = () => {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-[220px] py-12 sm:py-20 lg:py-[140px] bg-white text-center">
      {/* Section Heading */}
      <h1 className="text-[#212529] font-inter font-bold text-3xl sm:text-5xl lg:text-[72px] leading-tight lg:leading-[87.14px] tracking-[-0.02em] mb-8 sm:mb-12 lg:mb-[100px]">
        Our Sponsors
      </h1>

      {/* Sponsors Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
        {/* Apple Logo */}
        <Image src={apple} alt="Apple Logo" width={60} height={60} />

        {/* Microsoft Logo */}
        <Image src={Microsoft} alt="Microsoft Logo" width={140} height={30} />

        {/* Slack Logo */}
        <Image src={Slack} alt="Slack Logo" width={140} height={35} />

        {/* Google Logo */}
        <Image src={Google} alt="Google Logo" width={120} height={40} />
      </div>
    </section>
  );
};

export default SponsorsSection;
