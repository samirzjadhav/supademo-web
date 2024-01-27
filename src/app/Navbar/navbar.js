import React from "react";
import { HiChevronDown } from "react-icons/hi";

const navbar = () => {
  return (
    <section className="navbar max-w-7xl mr-auto ml-auto hidden md:block ">
      <div className="nav-container flex justify-between p-[10px]">
        <img src="./logo.svg" alt="logo" width={200} height={50} />

        <div className="nav-section flex items-center gap-[20px]">
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
            <a href="#">Sign in</a>
            <a
              href="#"
              className="bg-blue-500 py-[10px] px-[20px] text-white rounded-lg "
            >
              Get Supademo for Free
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default navbar;
