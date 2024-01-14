import React from "react";

function percent() {
  return (
    <section className="max-w-7xl mr-auto ml-auto py-[100px]">
      <div className="per-container flex justify-center items-center flex-col">
        <h1 className="text-[44px] font-medium">
          Drive productivity across any team
        </h1>
        <div className="per-list flex gap-[20px] pt-[30px]">
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
