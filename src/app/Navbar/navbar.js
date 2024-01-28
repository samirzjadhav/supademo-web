"use client";
import React from "react";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <section className="navbar max-w-7xl mr-auto ml-auto shadow-sm ">
      <div className="nav-container shadow-2xl md:shadow-[0] flex flex-col md:flex-row justify-between p-[20px] md:p-[10px] top-0 w-full max-w-7xl bg-white fixed z-[1000]">
        <div className="nav-image flex justify-between items-center">
          {" "}
          <Image src="./logo.svg" alt="logo" width={200} height={50} />
          <div
            className="nav-bar-icon md:hidden"
            onClick={() => setState(!state)}
          >
            <a href="#">
              {" "}
              <FaBars className="w-[26px] h-[26px]" />
            </a>
          </div>
        </div>

        <div className={state ? "menu-link-mobile" : "menu-link"}>
          <div className="nav-section flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-[20px]">
            <button className="nav-button flex justify-center items-center">
              <span>Use Cases</span>
              <HiChevronDown />
            </button>
            <button className="nav-button flex justify-center items-center">
              <span>Product</span>
              <HiChevronDown />
            </button>
            <span className="">
              <a href="#">Customer</a>
            </span>
            <span className="">
              <a href="#">Pricing</a>
            </span>
            <span className="flex items-center gap-[20px]">
              <a href="#" className="hidden md:block">
                Sign in
              </a>
              <a
                href="#"
                className="bg-blue-500 py-[10px] px-[20px] text-white rounded-lg "
              >
                Get Supademo for Free
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
