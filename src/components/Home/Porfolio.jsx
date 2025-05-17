import React from "react";
import PortPart from "../Utility/PortPart"
import BtnPrimary from "../Utility/BtnPrimary"

const Porfolio = () => {
  return (
    <section>
      <div className="container">
        <div className="py-25 flex flex-col items-center">
          <h2 className="font-sans text-5xl font-semibold text-primary leading-14 pb-6">
            Portfolio
          </h2>
          <p className="font-sans text-li-gray font-normal leading-6 text-base pb-18 text-center">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration.
          </p>
          <div className="grid grid-cols-3 gap-10 pb-12">
            <PortPart image="port1.png" title="Product Admin Dashboard" />
            <PortPart image="port2.png" title="Product Admin Dashboard" />
            <PortPart image="port3.png" title="Product Admin Dashboard" />
            <PortPart image="port4.png" title="Product Admin Dashboard" />
            <PortPart image="port5.png" title="Product Admin Dashboard" />
            <PortPart image="port6.png" title="Product Admin Dashboard" />
          </div>
          <BtnPrimary path="/" title="More Project"/>
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
