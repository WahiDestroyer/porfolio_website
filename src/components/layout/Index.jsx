import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer'
import Aos from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
    <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout;
