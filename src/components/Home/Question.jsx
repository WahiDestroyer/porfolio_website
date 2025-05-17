import React from "react";
import BtnPrimary from "../Utility/BtnPrimary"
import { FaArrowRight } from "react-icons/fa6"

const Question = () => {
  return (
    <section className="bg-primary">
      <div className="container py-25 flex flex-col items-center">
        <div className=" max-w-[620px] flex flex-col items-center">
          <h2 className="font-sans font-semibold text-5xl text-white leading-14">
            Do you have Project Idia? Let's discuss your project!
          </h2>
          <p className="py-8 text-center font-sans font-normal text-lg text-[#A5ACB5] leading-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <BtnPrimary
            path="/"
            title="Let’s work Together"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default Question;
