"use client";
import Image from "next/image";

// SwiperComponent.js
import { React, useEffect } from "react";
import Swiper from "swiper";

const SwiperComponent = () => {
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      // Swiper configuration options
      // For example:
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Clean up Swiper instance on unmount
    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper flex gap-[20px] text-white">
        {/* Your slides go here */}
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-1.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-2.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-3.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-4.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-5.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-6.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>
        <div className="swiper-slide">
          {" "}
          <Image src="/assets/slider-7.png" alt="" width={320} height={180} />
          <h1>
            4 Step Guide to Effective Founder-Led <br /> Sales Demos
          </h1>
          <p>Jan 25, 2024</p>
        </div>

        {/* Add more slides as needed */}
      </div>
      <div className="swiper-button-next"> hello</div>
      <div className="swiper-button-prev">hello</div>
    </div>
  );
};

export default SwiperComponent;
