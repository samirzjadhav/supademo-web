import React from "react";

function percent() {
  return (
    <section className="percent py-[50px] px-[20px] md:py-[100px]">
      <div className="per-container flex justify-center items-center flex-col">
        <h1 className="text-[34px] md:text-[44px] font-medium text-center">
          Drive productivity across any team
        </h1>
        <div className="per-list flex flex-col md:flex-row gap-[10px]  md:gap-[20px] pt-[30px]">
          <div className="per-item">
            <div className="per-number">
              <h1>25</h1>
              <span>%</span>
            </div>
            <p>Increase in team productivity</p>
          </div>
          <div className="per-item">
            <div className="per-number">
              <h1>250</h1>
              <span>%</span>
            </div>
            <p>Increase in user engagement</p>
          </div>
          <div className="per-item">
            <div className="per-number">
              <h1>15</h1>
              <span>k</span>
            </div>
            <p>Supademos created by teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default percent;
