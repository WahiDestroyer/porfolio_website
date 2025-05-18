import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-[#2B384C] z-0">
      <div className="container flex items-center justify-between pt-40 pb-12">
        <div>
          <img src="footer.png" alt="logo" />
        </div>
        <div>
          <ul className="flex items-center ">
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="p-3 font-sans font-normal text-base text-[#F0F1F3] leading-6"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <small className='text-white'>Copyright © 2022 Picto.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer
