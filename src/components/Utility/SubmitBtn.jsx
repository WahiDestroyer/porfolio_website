import React from 'react'
import { TbArrowBigRightLines } from 'react-icons/tb'
import { Link } from 'react-router'

const SubmitBtn = () => {
  return (
    <Link
      to=""
      type="submit"
      className="max-w-fit py-3 px-6 bg-pink rounded-sm flex gap-2 items-center text-white"
    >
      Submit <TbArrowBigRightLines />
    </Link>
  );
}

export default SubmitBtn
