import React from "react";
import Image from "next/image";
import { HiArrowSmRight } from "react-icons/hi";

function presale() {
  return (
    <section className=" preSale max-w-7xl mr-auto ml-auto pb-[100px]">
      <div className="container">
        <div className="pre-cards flex justify-center items-center gap-[50px] bg-[#FEF2F2] rounded-2xl p-[10px]">
          <div className="pre-right flex flex-col gap-[20px]">
            <h4>Customer Success</h4>
            <p>
              Drive product adoption and expansion through interactive, <br />
              self-guided guides and onboarding.
            </p>
            <div className="button flex items-center">
              <button className="text-[16px] font-medium">Learn More</button>
              <HiArrowSmRight />
            </div>
          </div>
          <div className="pre-left">
            <Image src="/example1.png" width={600} height={400} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default presale;
