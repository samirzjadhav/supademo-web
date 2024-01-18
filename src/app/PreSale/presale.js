import React from "react";
import Image from "next/image";
import { HiArrowSmRight } from "react-icons/hi";

function presale() {
  return (
    <section className=" preSale max-w-7xl mr-auto ml-auto pb-[100px]">
      <div className="container">
        <div className="pre-border p-[12px] bg-[#FEF8F8] mb-[50px] rounded-2xl">
          <div className="pre-card flex justify-center items-center gap-[50px] bg-[#FEF2F2] rounded-2xl p-[10px] ">
            <div className="pre-right flex flex-col gap-[20px]">
              <h4>Customer Success</h4>
              <p>
                Drive product adoption and expansion through interactive, <br />
                self-guided guides and onboarding.
              </p>
              <div className="button flex items-center">
                <button className="text-[18px] font-bold text-red-500">
                  Learn More
                </button>
                <HiArrowSmRight className="text-red-500" />
              </div>
            </div>
            <div className="pre-left">
              <Image src="/example1.png" width={600} height={400} alt="logo" />
            </div>
          </div>
        </div>
        <div className="pre-cards flex justify-center gap-[20px]">
          <div className="pre-card p-[20px] w-[60%] bg-[#FFFBEB] rounded-2xl">
            <div className="pre-top flex flex-col gap-[10px] p-[32px]">
              <h4>Pre-sales</h4>
              <p>
                Close more deals with personalized Supademos <br /> created for
                each persona and deal stage.
              </p>
              <div className="button flex items-center">
                <button className="text-[18px] font-bold text-amber-800">
                  Learn More
                </button>
                <HiArrowSmRight className="text-amber-800" />
              </div>
            </div>
            <div className="pre-down flex justify-center">
              <Image src="/example2.png" width={560} height={200} alt="logo" />
            </div>
          </div>
          <div className="pre-card p-[20px] bg-[#EFF6FF] rounded-2xl">
            <div className="pre-top flex flex-col gap-[10px] p-[32px]">
              <h4>Product Marketing</h4>
              <p>
                Increase marketing-qualifed leads by <br /> showcasing features
                and benefits before a <br /> paywall or sales demo.
              </p>
              <div className="button flex items-center">
                <button className="text-[18px] font-bold text-blue-500">
                  Learn More
                </button>
                <HiArrowSmRight className="text-blue-500" />
              </div>
            </div>
            <div className="pre-down">
              <Image src="/example3.png" width={460} height={200} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default presale;
