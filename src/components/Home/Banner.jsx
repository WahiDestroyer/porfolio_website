import React, { useEffect } from 'react'
import BtnPrimary from '../Utility/BtnPrimary'
import Aos from "aos";
import "aos/dist/aos.css";


const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);
  return (
    <>
      <section className="mb-56">
        <div className="container flex justify-between mt-44 items-end">
          <div>
            <h1
              className="text-primary font-semibold text-7xl font-sans leading-21 max-w-xl "
              data-aos="fade-down"
            >
              Hello, I’m Brooklyn Gilbert
            </h1>
            <p
              data-aos="fade-right"
              className="font-sans text-black font-normal text-lg leading-6 py-6 max-w-xl"
            >
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful
              webapplications through carefully crafted code and user-centric
              design.
            </p>
            
            <BtnPrimary data-aos="zoom-in" path="/" title="Say Hello!" />
            <div className="flex mt-35 max-w-2xl max-h-26 bg-light-pink text-center justify-around rounded-2xl">
              <div className="py-4 px-14 text-center border-r-4 border-white">
                <h3 className="font-sans text-3xl font-semibold leading-10 text-gray pb-2">
                  15 Y.
                </h3>
                <p className="font-normal text-base font-sans leading-6 text-gray">
                  Experience
                </p>
              </div>
              <div className="py-4 px-14 text-center border-r-4 border-white">
                <h3 className="font-sans text-3xl font-semibold leading-10 text-gray pb-2">
                  250+
                </h3>
                <p className="font-normal text-base font-sans leading-6 text-gray">
                  Project Completed
                </p>
              </div>
              <div className="py-4 px-14 text-center">
                <h3 className="font-sans text-3xl font-semibold leading-10 text-gray pb-2">
                  58
                </h3>
                <p className="font-normal text-base font-sans leading-6 text-gray">
                  Happy Client
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <img src="banner.png" alt="banner" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;