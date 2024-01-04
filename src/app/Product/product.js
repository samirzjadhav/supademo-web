import React from "react";

function product() {
  return (
    <section className="products max-w-7xl mr-auto ml-auto pb-[100px]  pt-[100px]">
      <h1 className="product-title text-center text-[48px] leading-[1] font-semibold">
        The fastest and easiest interactive demo <br /> platform you'll ever use
      </h1>
      <div className="product-list flex justify-center gap-[40px] mt-[50px]">
        <div className="product-item w-[320px]">
          <img src="./record-1.png" width={320} height={180} alt="" />
          <span className="text-red-500">STEP 1</span>
          <h3>Hit Record</h3>
          <p>
            Turn on our extension and click through any product flow. A Supademo
            is created with hotspots and guided text steps.
          </p>
        </div>
        <div className="product-item w-[320px]">
          <img src="./record-2.png" width={320} height={180} alt="" />
          <span className="text-purple-500">STEP 2</span>
          <h3>Hit Record</h3>
          <p>
            Turn on our extension and click through any product flow. A Supademo
            is created with hotspots and guided text steps.
          </p>
        </div>
        <div className="product-item w-[320px]">
          <img src="./record-3.png" width={320} height={180} alt="" />
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
