import React from "react";
import Image from "next/image";

import { HiArrowSmRight } from "react-icons/hi";

const Teams = () => {
  return (
    <section className="teams py-[50px] px-[30px] md:py-[100px] border-t-2 ">
      <div className="teams-container">
        <div className="teams-header flex flex-col justify-center items-center gap-[30px]">
          <h1 className=" text-[28px] md:text-[48px] font-medium md:font-semibold leading-[1.2] text-center">
            Get the fastest, easiest interactive <br /> demo platform for teams
          </h1>
        </div>

        <div className="button flex justify-center items-center mt-[30px]">
          <button className=" flex items-center text-[16px] font-medium bg-blue-600 text-white py-[14px] px-[24px] rounded-xl">
            Get Supademo for free
            <HiArrowSmRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teams;
