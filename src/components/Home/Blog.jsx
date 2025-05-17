import React from "react";
import BlogPart from "../Utility/BlogPart"

const Blog = () => {
  return (
    <section>
      <div className="container flex flex-col items-center">
        <div className="pb-18 max-w-[540px]  text-center pt-25">
          <h2 className="font-sans font-semibold text-primary text-5xl leading-14 pb-6">
            Blog
          </h2>
          <p className="font-sans text-lg text-li-gray font-normal leading-7">
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
      </div>
    </section>
  );
};

export default Blog;
