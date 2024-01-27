import React from "react";
import Image from "next/image";

import { HiArrowSmRight } from "react-icons/hi";

const peopleReviewsList = [
  {
    id: 1,
    name: "Daniela De Almada",
    role: "Head of Marketing",
    profileImg: "/james-photo.jpeg",
    review:
      "I absolutely love Supademo. We are using it for so much more than just showcasing use cases in our home page!",
  },
  {
    id: 2,
    name: "Casey O'Brien",
    role: "Solutions Consulting Director",
    profileImg: "/daniela-photo.png",
    review:
      "Supademo has completely transformed our early-stage demo motion. Gone are the days of custom demos for unqualified prospects.",
  },
  {
    id: 3,
    name: "Felix True",
    role: "Head of Presales",
    profileImg: "/Untitled.png",
    review:
      "Supademo has been a huge asset across multiple departments and workflows at easy software. We are thrilled to be working with them.",
  },
  {
    id: 4,
    name: "Eric Reynolds",
    role: "Marketing Agency Owner",
    profileImg: "/Untitled.png",
    review:
      "Must needed extension! Supademo is the perfect tool for educators, web design agencies, software providers, and helpful for pretty much any individual, company, or organization that needs to train or provide step-by-step tutorials.",
  },
  {
    id: 5,
    name: "Justin Berg",
    role: "Co-founder",
    profileImg: "/Untitled.png",
    review:
      "A game changer for us when it comes to making our product even more simple for our users to grasp, as well as helping them during the actual onboarding process.",
  },
  {
    id: 6,
    name: "Robert Boka",
    role: "Co-founder & CEO",
    profileImg: "/Untitled.png",
    review:
      "Great work, I’m thoroughly impressed. It’s literally saved me from getting on three phone calls just today by annotating a walkthrough for a customer who hasn’t completed onboarding.",
  },
  {
    id: 7,
    name: "Leonard Korkmaz",
    role: "Product Marketing Manager",
    profileImg: "/Untitled.png",
    review:
      "Supademo has become an integral tool for us in multiple ways. Primarily, it's a cornerstone within customer success.",
  },
  {
    id: 8,
    name: "Lucien Lu",
    role: "Digital Marketer",
    profileImg: "/Untitled.png",
    review:
      "Way better than Loom or Scribe. Supademo is 10x better than any other product I've seen.",
  },
  {
    id: 9,
    name: "Nick Lighter",
    role: "Lead Account Executive",
    profileImg: "/Untitled.png",
    review:
      "Supademo has become an integral tool for us in multiple ways. Primarily, it's a cornerstone within customer success.",
  },
];

const peopleReviews = peopleReviewsList.map((peopleReview) => (
  <div
    className="reviewer p-[20px] flex flex-col gap-[16px] rounded-2xl  bg-[#F1F5F9]"
    key={peopleReview.id}
  >
    <div className="flex gap-[10px]">
      <Image
        src={peopleReview.profileImg}
        alt="Daniela De Almada"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="reviewer">
        <h4 className="font-bold text-[18px]">{peopleReview.name}</h4>
        <h5 className="font-medium ">{peopleReview.role}</h5>
      </div>
    </div>
    <div className="review-message w-[300px]">{peopleReview.review}</div>
    <div className="review-button flex items-center justify-end gap-[4px] text-blue-400">
      <button className="font-bold ">Learn More</button>
      <HiArrowSmRight />
    </div>
  </div>
));

console.log(peopleReviews);

function review() {
  return (
    <section className="review max-w-7xl mr-auto ml-auto py-[50px] px-[30px] md:py-[100px] ">
      <div className="review-container">
        <div className="review-top flex flex-col justify-center items-center gap-[30px]">
          <h1 className=" text-[38px] md:text-[48px] font-semibold md:font-bold leading-[1] text-center">
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

        <div className="review-bottom flex justify-center items-center mt-[100px]  ">
          <div className="review-info grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
            {peopleReviews}
          </div>
        </div>
      </div>
    </section>
  );
}

export default review;
