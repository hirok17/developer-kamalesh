import React from 'react'
import Hero from '../component/homePage/Hero';
import BrandLogo from '../component/homePage/BrandLogo';
import Services from '../component/homePage/Services';
import Contact from '../component/homePage/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandLogo />
      <Services />
      <Contact />
    </>
  )
}

export default Home;