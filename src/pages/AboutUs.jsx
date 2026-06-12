import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/AboutHero'
import WhoWeAre from '../components/WhoWeAre'
import WhyChooseUs from '../components/WhyChooseUs'
import CompanyStats from '../components/CompanyStats'
import ProcessSection from '../components/ProcessSection'
import Footer from '../components/Footer.jsx'
import AboutCTA from '../components/AboutCTA.jsx'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <AboutHero/>
    <WhyChooseUs/>
    <WhoWeAre/>
    <CompanyStats/>
    <ProcessSection/>
    <AboutCTA/>
    <Footer/>
    </>
  )
}

export default AboutUs