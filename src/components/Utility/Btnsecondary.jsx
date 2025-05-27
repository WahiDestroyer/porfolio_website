import React from 'react'
import { Link } from 'react-router'
import { FaDownload } from "react-icons/fa6";

const Btnsecondary = ({path, title}) => {
  return (
    <Link
      to={path}
      data-aos="zoom-in"
      className="py-3 px-6 font-semibold font-sans text-base rounded-sm hover:bg-pink transition-all duration-300 hover:text-white border border-pink text-pink flex! items-center"
    >
      <FaDownload /> {title}
    </Link>
  );
}

export default Btnsecondary
