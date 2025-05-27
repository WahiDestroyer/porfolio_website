import React from 'react'

const ExperiencePart = ({title}) => {
  return (
    <div
      data-aos="fade-left"
      className="p-8 bg-white hover:translate-x-2.5 hover:border-l-5 border-pink rounded-md transition-all duration-500 max-w-fit"
    >
      <h2 className="text-primary text-2xl font-semibold font-sans">{title}</h2>
      <p className="font-sans text-gray text-base font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
        arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
        eget lorem ac vestibulum.
      </p>
    </div>
  );
}

export default ExperiencePart
