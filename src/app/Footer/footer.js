import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="footer bg-gray-900">
      <div className="Footer-container py-[50px] px-[30px] md:pt-[100px] text-white ">
        <div className=" flex flex-col md:flex-row gap-[30px] items-center md:items-start ">
          <div className="footer-logo">
            <Image src="./supademo-logo.svg" width={180} height={50} alt="" />
          </div>
          <div className="footer-coponent grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
            <div className="use-cases">
              <h6>USE CASES</h6>
              <ul>
                <li>
                  <a href="#">Customer Success</a>
                </li>
                <li>
                  <a href="#">Product Marketing</a>
                </li>
                <li>
                  <a href="#">Sales Enablement</a>
                </li>
                <li>
                  <a href="#">Training & Onboarding</a>
                </li>
                <li>
                  <a href="#">All Use Cases</a>
                </li>
              </ul>
            </div>
            <div className="use-cases ">
              <h6>Company</h6>
              <ul>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Slack Community</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
                <li>
                  <a href="#">Support Center</a>
                </li>
              </ul>
            </div>
            <div className="use-cases ">
              <h6>Product</h6>
              <ul>
                <li>
                  <a href="#">Supademo AI</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Showcase Examples</a>
                </li>
                <li>
                  <a href="#">Product Updates</a>
                </li>
                <li>
                  <a href="#">Chrome Extension</a>
                </li>
              </ul>
            </div>
            <div className="use-cases ">
              <h6>Legal</h6>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-links flex justify-between mt-[20px]">
          <div className="footer-dis">
            <h6>Supademo, Inc. All Rights Reserved.</h6>
          </div>
          <div className="footer-link ">
            <ul className="flex justify-center items-center gap-[10px]">
              <li>
                <a href="#">
                  <svg
                    class="w-7 h-7 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    class="w-7 h-7 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
