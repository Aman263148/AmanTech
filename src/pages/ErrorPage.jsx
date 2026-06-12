import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 
const ErrorPage = () => {
  return (
    <>
    
   
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            duration: 1,
            y: {
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            },
          }}
          className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none"
        >
          <span className="text-blue-800">4</span>
          <span className="text-orange-500">0</span>
          <span className="text-blue-800">4</span>
        </motion.h1>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-blue-900">A</span>
            <span className="text-orange-500">man</span>
            <span className="text-blue-900">Tech</span>
          </p>
        </motion.div>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-slate-900"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          The page you're looking for might have been moved,
          deleted, or never existed.
        </motion.p>

        {/* Animated Illustration */}
        <motion.div
          animate={{
            rotate: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="mt-10 text-7xl md:text-8xl"
        >
          🚀
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Go to Home Page
          </Link>
        </motion.div>

      </div>
    </div>
  
    </>
  )
}

export default ErrorPage;