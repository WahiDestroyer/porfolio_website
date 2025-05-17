import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col text-center items-center pb-25">
          <h2 className="text-nav font-semibold font-sans text-5xl leading-14 pb-24">
            Testimonial
          </h2>
          <p className="font-sans font-normal text-lg text-li-gray leading-6 pb-18 max-w-xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>

          <p className="font-sans text-lg font-medium leading-6 text-[#2B384C] max-w-[872px]">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <h4 className="text-black text-lg leading-7 font-medium font-sans pb-2 pt-6">
            Esther Howard
          </h4>
          <small className="text-black font-light text-base leading-6">Managing Director, ABC company</small>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
