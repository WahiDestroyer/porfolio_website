import React from "react";
import BlogPart from "../Utility/BlogPart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <section>
      <div className="container flex flex-col items-center overflow-hidden justify-center">
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
        <div className="flex gap-6 pb-25">
          <BlogPart image="blog1.png" />
          <BlogPart image="blog2.png" />
          <BlogPart image="blog3.png" />
          <BlogPart image="blog4.png" />
        </div>
        <Slider {...settings} >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
