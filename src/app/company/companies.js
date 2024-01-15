import React from "react";
import Image from "next/image";

function companies() {
  return (
    <section className="company  max-w-7xl mr-auto ml-auto text-center py-[64px] border-b-2">
      <div className="company-title mb-[60px]">
        {" "}
        <h1 className="text-[24px] font-semibold">
          Trusted by 7000+ users at fast-growing companies
        </h1>
      </div>
      <div className="company-logos flex gap-[50px] justify-center">
        <a href="#">
          <Image src="./company-logo-1.svg" width={50} height={50} alt="logo" />
        </a>
        <a href="#"></a>
        <a href="#">
          <Image src="./company-logo-2.svg" width={50} height={50} alt="logo" />
        </a>
        <a href="#">
          <Image src="./company-logo-3.svg" width={50} height={50} alt="logo" />
        </a>
        <a href="#">
          <Image src="./company-logo-4.svg" width={50} height={50} alt="logo" />
        </a>
        <a href="#">
          <Image src="./company-logo-5.svg" width={50} height={50} alt="logo" />
        </a>
        <a href="#">
          <Image src="/company-logo-6.png" width={50} height={50} alt="logo" />
        </a>
        <a href="#">
          <Image src="./company-logo-7.svg" width={50} height={50} alt="logo" />
        </a>
        <a href="#">
          <Image src="/company-logo-8.png" width={50} height={50} alt="logo" />
        </a>
      </div>
    </section>
  );
}

export default companies;
