import React from 'react'
import Hero from "./Hero";
import About from "./About";
import MissionVision from "./MissionVision";
import Products from "./Product";
import Footer from "./Footer";
import Contact from "./Contact";
import Export from "./Export";

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <MissionVision />
        <Products/>
        <Export/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
