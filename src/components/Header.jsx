import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import photo from '../assets/photo.png';

const Header = () => {
    const text = "AmanTech";
    return (
        <>
<div
  className="relative min-h-screen md:min-h-[700px] lg:min-h-[745px] bg-cover bg-center lg:bg-right bg-no-repeat flex items-center"
  style={{ backgroundImage: `url(${photo})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6  lg:px-10">

    <div className="w-full lg:w-1/2">

      <div className="max-w-2xl flex flex-col items-start text-left py-12 md:py-16 lg:py-0">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-400/10 backdrop-blur-md border border-white/20 text-black px-4 py-2 rounded-full mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          Trusted IT Solutions Partner
        </div>

        {/* Heading */}
        <h1 className="text-zinc-900 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Unlock the Potential of Your Brand with
        </h1>

        {/* Animated AmanTech */}
        <div className="mt-4 sm:mt-5 flex flex-wrap text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
              }}
              className={
                index === 0
                  ? "text-blue-800"
                  : index < 4
                  ? "text-orange-500"
                  : "text-blue-800"
              }
            >
              {char}
            </motion.span>
          ))}

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: text.length * 0.15,
              duration: 0.4,
            }}
            className="text-blue-800"
          >
            ...
          </motion.span>
        </div>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-zinc-800 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
          We deliver innovative IT solutions that help businesses scale
          faster, improve security, and achieve sustainable growth in the
          digital era.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

          <Link
            to="/contact"
            className="w-full sm:w-auto text-center bg-blue-800 hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto bg-white hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center justify-center gap-3 font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>Explore Services</span>
            <FaArrowUp className="rotate-45" />
          </Link>

        </div>

      </div>

    </div>

  </div>
</div>

        </>
    )
}

export default Header
