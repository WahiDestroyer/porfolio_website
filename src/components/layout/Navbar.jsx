import React from "react";
import { Link } from "react-router";
import BtnPrimary from "../Utility/BtnPrimary";

const Navbar = () => {
 
  
  

  return (
    <nav data-aos="fade-down" className="py-5 bg-white">
      <div className="container flex items-center justify-between">
        <div>
          <Link to="/">
            <img src="/main_logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex text-nav font-medium text-base">
            <li>
              <Link to="/" className="py-3 px-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="py-3 px-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/process" className="py-3 px-6">
                Process
              </Link>
            </li>
            <li>
              <Link to="/" className="py-3 px-6">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/" className="py-3 px-6">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="py-3 px-6">
                Services
              </Link>
            </li>
          </ul>
          <BtnPrimary path="/" title="Contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
