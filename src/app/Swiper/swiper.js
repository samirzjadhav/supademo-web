"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../Utilities/slider.json";
import { sliderSettings } from "../Utilities/common.js";

const SwiperSliders = () => {
  return (
    <section className="card-wrapper border-t-2">
      <div className="card-heading  max-w-7xl mr-auto ml-auto text-center py-[50px] px-[30px]">
        <h1 className="text-[3rem] flex flex-col leading-[1] font-bold">
          Resources to help you create <span>better product demos</span>
        </h1>
      </div>

      <div className="card-container">
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" r-card">
                <Image src={card.image} alt="home" width={600} height={400} />
                <div className="flex flex-col items-start justify-center gap-[10px] rounded-b-lg shadow-xl p-[10px]">
                  <span className="secondaryText">{card.detail}</span>
                  <span className="primaryText">{card.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons flexCenter">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default SwiperSliders;
