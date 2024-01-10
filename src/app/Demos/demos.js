import React from "react";

function demos() {
  return (
    <section className="max-w-7xl mr-auto ml-auto pb-[100px]  pt-[100px] flex flex-col items-center justify-center">
      <h3 className="demo-header text-[36px] font-semibold">
        Scale how your team demonstrates products
      </h3>
      <p>
        Supademo makes product demos and guides quick and intuitive for everyone
        on the team.
      </p>
      <div className="demo-cards">
        <div className="demo-card p-[20px] bg-[#E0E7FF] rounded-xl">
          <div className="demo-svg mb-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width="25"
              height="25"
              class="text-blue-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              ></path>
            </svg>
          </div>
          <h1 className="text-blue-700 text-[18px] font-semibold">
            Multi-Demo Showcase
          </h1>
          <p className="text-gray-400 text-[14px]">
            Group multiple Supademos into a training <br /> module, product
            tour, or onboarding guide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default demos;
