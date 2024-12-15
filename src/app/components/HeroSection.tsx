import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full mx-auto h-auto px-4 lg:px-16 py-8 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      style={{ backgroundColor: "#043873" }}
    >
      {/* Left Section - Text */}
      <div>
        <h2 className="font-inter font-bold text-3xl lg:text-5xl leading-tight tracking-tight text-white max-w-full lg:max-w-[656px]">
          Get More Done with Whitepace
        </h2>
        <p className="mt-4 text-base lg:text-lg leading-relaxed text-white max-w-full lg:max-w-[656px]">
          Project management software that enables your teams to collaborate,
          plan, analyze, and manage everyday tasks.
        </p>
        <button className="mt-6 lg:mt-10 px-6 py-3 bg-[#4F9CF9] rounded-lg text-white font-semibold flex items-center gap-2 text-sm lg:text-base">
          Try Whitepace Free
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>

      {/* Right Section - Card/Image Container */}
      <div
        className="w-full h-[300px] lg:h-[500px] rounded-lg"
        style={{ backgroundColor: "#C4DEFD" }}
      ></div>
    </div>
  );
};

export default HeroSection;
