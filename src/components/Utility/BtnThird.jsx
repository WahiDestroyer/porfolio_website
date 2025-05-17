import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'

const BtnThird = ({path, btnName}) => {
  return (
    <Link
      to={path}
          className="py-3 px-6 font-semibold font-sans text-base rounded-sm hover:bg-pink transition-all duration-300 hover:text-white border border-pink text-pink flex! items-center max-w-42 gap-3.5">{btnName}<FaArrowRight />
      </Link>
  );
}

export default BtnThird
