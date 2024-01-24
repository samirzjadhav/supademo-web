import React from "react";
import Image from "next/image";

function review() {
  return (
    <section className="review max-w-7xl mr-auto ml-auto pt-[100px] pb-[100px]">
      <div className="review-container">
        <div className="review-top flex flex-col justify-center items-center gap-[30px]">
          <h1 className="text-[48px] font-bold leading-[1] text-center">
            Hands down the{" "}
            <span className="text-blue-600">
              {" "}
              best demo product we have used
            </span>{" "}
            <br />
            so far. It is like Loom but 10x more intuitive, <br /> embeddable
            and slick
          </h1>
          <div className="profile flex gap-[10px]">
            <Image
              src="/james-photo.jpeg"
              width={60}
              height={60}
              className="rounded-full"
              alt=""
            />
            <div className="profile-info">
              <h5>James</h5>
              <p>CEO at Mana</p>
            </div>
          </div>
          <Image src="/review-badge-min.png" width={420} height={100} alt="" />
        </div>
      </div>
    </section>
  );
}

export default review;
