import React from 'react'

const Process = ({icon, title, description}) => {
  return (
    <div className="group p-8 rounded-md max-w-80 max-h-fit bg-white hover:scale-105 overflow-hidden transition-all duration-800">
      <div className="w-fit bg-[#EDD8FF] text-pink p-5 group-hover:bg-pink group-hover:text-white rounded-lg transition-all duration-700 text-lg text-center">
        {icon}
      </div>
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

