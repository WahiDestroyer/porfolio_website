import React from "react";
import BtnPrimary from "../Utility/BtnPrimary"
import ExperiencePart from "../Utility/ExperiencePart"

const Experience = () => {
  return (
    <section className="bg-[#F0F1F3]">
      <div className="container p-38 flex justify-between">
        <div className="max-w-[530px]">
          <h2 data-aos="fade-down"
            className="text-nav font-sans font-semibold text-5xl leading-14">
            What I do?
          </h2>
          <p data-aos="zoom-in"
            className="font-sans text-lg font-normal text-li-gray leading-6 pt-6 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p data-aos="fade-up" className="font-sans text-lg font-normal text-li-gray leading-6 pb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <BtnPrimary path="/" title="Say Hello!" />
        </div>
        <div className="overflow-hidden grid grid-cols-1 gap-6">
          <ExperiencePart  title="User Experience (UX)" />
          <ExperiencePart title="User Interface (UI)" />
          <ExperiencePart title="Web Development" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
