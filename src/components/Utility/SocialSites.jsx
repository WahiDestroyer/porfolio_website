import React from "react";
import {
  FaDribbble,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBehance,
} from "react-icons/fa6";
import { Link } from "react-router";

const SocialSites = ({style}) => {
  return (
    <div className={`flex justify-around p-2 items-center w-64 bg-white rounded-md ${style}`} >
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-800"
      >
        <FaFacebookF className="w-5 h-5 text-pink group-hover:text-white " />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-800"
      >
        <FaDribbble className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-800"
      >
        <FaInstagram className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-800"
      >
        <FaLinkedinIn className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-800"
      >
        <FaBehance className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
    </div>
  );
};

export default SocialSites;
