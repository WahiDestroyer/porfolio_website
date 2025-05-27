import React from "react";

const Clients = () => {
  return (
    <section>
      <div className="container py-25 flex flex-col items-center">
        <div className="flex flex-col text-center max-w-xl">
          <h2 data-aos="fade-down" className="font-sans font-semibold text-5xl leading-14 text-primary pb-6">
            Happy Clients
          </h2>
          <p data-aos="fade-up" className="font-sans font-normal text-li-gray text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="flex justify-between pt-6 gap-6">
          <img
            src="google.png"
            alt="media"
            className="w-50 h-50 grayscale-100 hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="dribbble.png"
            alt="media"
            className="w-50 h-50 grayscale-100 hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="linkedin.png"
            alt="media"
            className="w-50 h-50 grayscale-100 hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="amazon.png"
            alt="media"
            className="w-50 h-50 grayscale-100 hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="medium.png"
            alt="media"
            className="w-50 h-50 grayscale-100 hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="spotify.png"
            alt="media"
            className="w-50 h-50 grayscale-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
