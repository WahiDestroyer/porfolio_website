import React from "react";
import BlogPart from "../Utility/BlogPart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className="flex text-black justify-center"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 bg-gray-300 rounded-full">
      </div>
    ),
  };
  
  return (
    <section>
      <div className="container flex flex-col items-center overflow-hidden">
        <div className="pb-18 max-w-[540px]  text-center pt-25">
          <h2
            data-aos="fade-down"
            className="font-sans font-semibold text-primary text-5xl leading-14 pb-6"
          >
            Blog
          </h2>
          <p
            data-aos="zoom-in"
            className="font-sans text-lg text-li-gray font-normal leading-7"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="w-full overflow-hidden pb-10">
          <Slider {...settings} className="pb-2">
            <div>
              <BlogPart image="blog1.png" />
            </div>
            <div>
              <BlogPart image="blog2.png" />
            </div>
            <div>
              <BlogPart image="blog3.png" />
            </div>
            <div>
              <BlogPart image="blog4.png" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Blog;
