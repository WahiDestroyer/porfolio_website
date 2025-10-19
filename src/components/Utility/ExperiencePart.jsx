import React, { useState } from 'react'

const ExperiencePart = ({ title }) => {
  
  const [open, setOpen] = useState(false)
  
  return (
    <div data-aos="fade-left">
      <div
        className={`p-8 bg-white ${open && 'translate-x-2.5 border-l-5'}  border-pink rounded-md transition-all duration-500 w-[630px]`}
      >
        <h2
          onClick={() => setOpen(!open)}
          className="text-primary text-2xl font-semibold font-sans"
        >
          {title}
        </h2>
        <p
          className={`${
            open ? "block" : "hidden"
          } transition-all duration-700 font-sans text-gray text-base font-semibold `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum.
        </p>
      </div>
    </div>
  );
}

export default ExperiencePart
