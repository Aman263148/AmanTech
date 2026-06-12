import React from 'react'
import img from '../assets/img.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const AboutInfo = () => {
  return (
    <>
    <div
  style={{ backgroundImage: `url(${img})` }}
  className="
    min-h-[450px] md:min-h-[500px] lg:min-h-[650px]
    bg-contain md:bg-cover
    bg-right md:bg-right
    bg-no-repeat
    flex items-center
    py-10
    relative
    overflow-hidden
  "
>
  {/* Text Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="max-w-full sm:max-w-lg md:max-w-xl">

      {/* Badge */}
      <p className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
        About AmanTech
      </p>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
        Brief Information About the Company
      </h1>

      {/* Description */}
      <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
        AmanTech is a forward-thinking IT company delivering smart,
        innovative and reliable digital solutions for modern businesses.
        We help organizations grow through technology, creativity and
        exceptional customer service.
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircleOutline className="text-indigo-600 text-2xl flex-shrink-0" />
          <p className="text-slate-800 font-medium text-sm sm:text-base">
            Quality & Innovation
          </p>
        </div>

        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircleOutline className="text-indigo-600 text-2xl flex-shrink-0" />
          <p className="text-slate-800 font-medium text-sm sm:text-base">
            Client Satisfaction
          </p>
        </div>

        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircleOutline className="text-indigo-600 text-2xl flex-shrink-0" />
          <p className="text-slate-800 font-medium text-sm sm:text-base">
            On-Time Delivery
          </p>
        </div>

        <div className="flex items-center gap-2">
          <IoIosCheckmarkCircleOutline className="text-indigo-600 text-2xl flex-shrink-0" />
          <p className="text-slate-800 font-medium text-sm sm:text-base">
            24/7 Support
          </p>
        </div>

      </div>

    </div>

  </div>
</div>
    </>
  )
}

export default AboutInfo