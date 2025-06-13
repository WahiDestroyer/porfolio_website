import React from 'react'
import { Link } from 'react-router'
import { FaDownload } from "react-icons/fa6";

const Btnsecondary = ({path, title}) => {
  return (
    <div data-aos="zoom-in">
    <Link
      to={path}
      
      className="py-3 px-6 font-semibold font-sans text-base rounded-sm hover:bg-pink transition-all duration-300 hover:text-white border border-pink text-pink flex! items-center"
    >
      <FaDownload /> {title}
      </Link>
    </div>
  );
}

export default Btnsecondary
