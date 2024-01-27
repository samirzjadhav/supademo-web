import React from "react";
import { HiArrowSmRight } from "react-icons/hi";

function hero() {
  return (
    <section className="hero-sectoion  max-w-7xl mr-auto ml-auto">
      <div className="hero-container p-[20px] mt-[50px]">
        <div className="hero-content">
          <h1 className="hero-title text-center text-[48px] md:text-[72px] leading-[1] font-bold mb-[24px]">
            Create engaging interactive <br /> product demos{" "}
            <span className="text-blue-600">with AI</span>
          </h1>
          <p className="hero-discription text-center text-[16px] md:text-[20px] mb-[40px] text-gray-500 leading-[28px]">
            Drive product adoption, empower customer success, and accelerate
            <br /> onboarding - for free with no code.
          </p>
          <div className="hero-btn flex justify-center">
            <a
              href="#"
              className="bg-blue-500 py-[14px] px-[20px] text-white rounded-lg flex items-center gap-[10px]"
            >
              Get Supademo for Free
              <HiArrowSmRight color="sky-blue" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-img mt-[50px] mx-[20px] border-4 shadow-2xl">
        {" "}
        <img src="./hero-image.png" alt="" />
      </div>
    </section>
  );
}

export default hero;
