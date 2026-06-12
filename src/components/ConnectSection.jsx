import React from 'react'
import connect from '../assets/connect.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const ConnectSection = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 my-10">

  <div
    className="relative h-[180px] sm:h-[200px] md:h-[220px] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
    style={{ backgroundImage: `url(${connect})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 lg:px-10 gap-2 md:gap-0">

      <div className="text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
          Get in Touch with AmanTech
        </h1>

        <p className="text-sm md:text-base text-gray-200 max-w-xl">
          Let's discuss your project and turn your ideas into reality.
        </p>
      </div>

      <Link
        to="/contact"
        className="mt-2 md:mt-0 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300"
      >
        Contact Us
        <FaArrowRightLong />
      </Link>

    </div>
  </div>

</div>
    </>
  )
}

export default ConnectSection