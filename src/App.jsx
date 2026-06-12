import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ThankYou from './pages/ThankYou.jsx'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App