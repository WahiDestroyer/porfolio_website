import React from 'react'
import { Form, Link } from 'react-router'
import Banner from '../components/Home/Banner'
import User from '../components/Home/User'
import Work from '../components/Home/work'
import Porfolio from '../components/Home/Porfolio'
import Question from '../components/Home/Question'
import Blog from '../components/Home/Blog'
import Experience from '../components/Home/Experience'
import Clients from '../components/Home/Clients'
import Testimonial from '../components/Home/Testimonial'
import FormV from '../components/Home/FormV'

const Home = () => {
  return (
    <>
      <Banner />
      <User />
      <Work/>
      <Porfolio />
      <Question />
      <Blog />
      <Experience />
      <Clients />
      <Testimonial />
      <FormV/>
    </>
  )
}

export default Home
