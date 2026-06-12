import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx';
import OurServices from '../components/OurServices.jsx';
import CompanyInfo from '../components/CompanyInfo.jsx';
import AboutInfo from '../components/AboutInfo.jsx';
import ConnectSection from '../components/ConnectSection.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <OurServices/>
      <CompanyInfo/>
      <ConnectSection/>
      <AboutInfo/>
      <Footer/>
    </>
  )
}

export default Home;