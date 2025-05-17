import React from "react";
import {
  FaDribbble,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaBehance,
} from "react-icons/fa6";
import { Link } from "react-router";

const SocialSites = () => {
  return (
    <div className="flex justify-around p-2 items-center w-64 bg-white rounded-md" >
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-600"
      >
        <FaFacebookF className="w-5 h-5 text-pink group-hover:text-white " />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-600"
      >
        <FaDribbble className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-600"
      >
        <FaInstagram className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-600"
      >
        <FaLinkedinIn className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
      <Link
        to="/"
        className="p-3 rounded-md hover:bg-pink group transition-all duration-600"
      >
        <FaBehance className="w-5 h-5 text-pink group-hover:text-white" />
      </Link>
    </div>
  );
};

export default SocialSites;
