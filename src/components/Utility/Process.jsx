import React from 'react'

const Process = ({icon, title, description}) => {
  return (
    <div className="p-8 rounded-md max-w-80 max-h-fit bg-white hover:scale-105 overflow-hidden transition-all duration-800">
      <h2 className="max-w-13 max-h-fit bg-[#EDD8FF] text-pink p-5 hover:bg-pink hover:text-white rounded-lg transition-all duration-700 text-base">
        {icon}
      </h2>
      <h3 className="font-sans font-semibold text-primary text-base leading-6 pt-8 pb-3">
        {title}
      </h3>
      <p className="font-sans font-normal text-base text-secondary leading-6">
        {description}
      </p>
    </div>
  );
}

export default Process

