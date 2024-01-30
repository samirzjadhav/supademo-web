import React from "react";
import Image from "next/image";

function product() {
  return (
    <section className="products py-[50px] md:py-[100px]  px-[30px]">
      <h1 className="product-title text-center text-[38px] md:text-[48px] leading-[1] font-semibold">
        The fastest and easiest interactive demo <br /> platform youll ever use
      </h1>
      <div className="product-list flex flex-col md:flex-row items-center justify-center gap-[40px] mt-[50px]">
        <div className="product-item w-[320px]">
          <Image src="/record-1.png" width={320} height={180} alt="" />
          <span className="text-red-500">STEP 1</span>
          <h3>Hit Record</h3>
          <p>
            Turn on our extension and click through any product flow. A Supademo
            is created with hotspots and guided text steps.
          </p>
        </div>
        <div className="product-item w-[320px]">
          <Image src="/record-2.png" width={320} height={180} alt="" />
          <span className="text-purple-500">STEP 2</span>
          <h3>Hit Record</h3>
          <p>
            Turn on our extension and click through any product flow. A Supademo
            is created with hotspots and guided text steps.
          </p>
        </div>
        <div className="product-item w-[320px]">
          <Image src="/record-3.png" width={320} height={180} alt="" />
          <span className="text-green-500">STEP 3</span>
          <h3>Hit Record</h3>
          <p>
            Turn on our extension and click through any product flow. A Supademo
            is created with hotspots and guided text steps.
          </p>
        </div>
      </div>
      <div className="product-button"></div>
    </section>
  );
}

export default product;
