import React from "react";
import { motion } from "framer-motion";

import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

import {
  FaCode,
  FaBullhorn,
  FaCloud,
  FaVideo,
} from "react-icons/fa6";

import { IoMdColorPalette } from "react-icons/io";

// Replace with your image
import bannerImage from "../assets/Logo.png";
import { HashLink } from 'react-router-hash-link';

const ServicesHero = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Dev",
      goto:'#web-dev',
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing",
      goto:'#marketing',
    },
    {
      icon: <FaCloud />,
      title: "SaaS",
      goto:'#saas',
    },
    {
      icon: <FaMobileAlt />,
      title: "Apps",
      goto:'#apps-dev',
    },
    {
      icon: <IoMdColorPalette />,
      title: "UI/UX",
      goto:'#ui-ux',
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphics",
      goto:'#graphics-designing',
    },
    {
      icon: <FaVideo />,
      title: "Video",
      goto:'#video-editing',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 min-h-screen flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:-mt-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              Our Services
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Digital Solutions
              <br />
              That
              <span className="text-orange-500">
                {" "}Drive Growth
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              From websites and mobile applications to SaaS products,
              branding, marketing and creative design, AmanTech helps
              businesses build a strong digital presence and achieve
              long-term growth.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                "Web Development",
                "Mobile Apps",
                "SaaS Solutions",
                "Digital Marketing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
              

              <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="relative hidden lg:flex items-center justify-center h-[650px]">

            {/* Glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl"></div>

            {/* Orbit Rings */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-blue-200"></div>

            <div className="absolute w-[400px] h-[400px] rounded-full border border-orange-100"></div>

            {/* Rotating Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                
              }}
              className="absolute w-[500px] h-[500px] lg:-mt-20"
            >
              {services.map((service, index) => {
                const angle = (360 / services.length) * index;

                const radius = 220;

                return (
                  <HashLink 
                    smooth to={service.goto}
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `
                        rotate(${angle}deg)
                        translate(${radius}px)
                        rotate(-${angle}deg)
                      `,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -6,
                      }}
                      className="
                        bg-white
                        w-28
                        h-28
                        rounded-2xl
                        shadow-lg
                        border
                        border-slate-100
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-3
                      "
                    >
                      <div className="text-3xl text-blue-800 mb-2">
                        {service.icon}
                      </div>

                      <h3 className="text-xs font-semibold text-slate-700">
                        {service.title}
                      </h3>
                    </motion.div>
                  </HashLink>
                );
              })}
            </motion.div>

           

            {/* Decorative Dots */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute top-16 right-6"
            >
              <div className="relative w-20 h-20">
                <span className="absolute w-4 h-4 bg-orange-500 rounded-full"></span>

                <span className="absolute right-0 top-7 w-4 h-4 bg-orange-500 rounded-full"></span>

                <span className="absolute left-8 bottom-0 w-4 h-4 bg-orange-300 rounded-full"></span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile & Tablet Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 lg:hidden">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-5 shadow border text-center"
            >
              <div className="text-3xl text-blue-800 flex justify-center mb-3">
                {service.icon}
              </div>

              <h3 className="font-semibold text-sm">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;