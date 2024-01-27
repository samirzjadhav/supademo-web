import React from "react";
import Image from "next/image";

const companyLogos = [
  { image: "./company-logo-1.svg", id: 1 },
  { image: "./company-logo-2.svg", id: 2 },
  { image: "./company-logo-3.svg", id: 3 },
  { image: "./company-logo-4.svg", id: 4 },
  { image: "./company-logo-5.svg", id: 5 },
  { image: "/company-logo-6.png", id: 6 },
  { image: "./company-logo-7.svg", id: 7 },
  { image: "/company-logo-8.png", id: 8 },
];

const companyLogoList = companyLogos.map((companyLogo) => (
  <Image
    src={companyLogo.image}
    key={companyLogo.id}
    width={50}
    height={50}
    alt="logo"
  />
));

function companies() {
  return (
    <section className="company  max-w-7xl mr-auto ml-auto text-center py-[64px] border-b-2">
      <div className="company-title mb-[40px]">
        {" "}
        <h1 className="text-[24px] font-semibold">
          Trusted by 7000+ users at fast-growing companies
        </h1>
      </div>
      <div className="company-logos p-[20px]">
        <a
          href="#"
          className="flex flex-wrap justify-center items-center gap-[50px] "
        >
          {companyLogoList}
        </a>
      </div>
    </section>
  );
}

export default companies;
