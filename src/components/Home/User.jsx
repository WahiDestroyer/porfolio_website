import React from "react";
import BtnPrimary from "../Utility/BtnPrimary";
import Btnsecondary from "../Utility/Btnsecondary";
import SocialSites from "../Utility/SocialSites"

const User = () => {
  return (
    <section className="translate-y-28 z-10">
      <div className="container flex items-center justify-between bg-white rounded-2xl">
        <div className="relative">
          <img src="banner.png" alt="User" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 ">
            <SocialSites />
          </div>
        </div>
        <div className="max-w-lg">
          <h2 className="text-primary font-sans font-semibold text-4xl leading-12 pb-8">
            I am Professional User
            <br /> Experience Designer
          </h2>
          <p
            className="font-sans text-secondary font-normal text-base leading-6
          pb-4"
          >
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>
          <p className="font-sans text-secondary font-normal text-base leading-6">
            I design and develop services for customers specializing creating
            stylish, modern websites, web services and online stores. My passion
            is to design digital user experiences.
          </p>
          <div className="flex pt-8 gap-4">
            <BtnPrimary path="/" title="My Project" />
            <Btnsecondary path="/" title="Download CV" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
