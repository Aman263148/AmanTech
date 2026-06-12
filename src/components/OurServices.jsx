import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import marketing from '../assets/marketing.png'
import { IoMdColorPalette } from "react-icons/io";
import { FaPagelines } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const OurServices = () => {
    return (
        <>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">

    {/* Section Header */}
    <div className="flex justify-center lg:justify-start">
        <div className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full flex items-center gap-2 font-medium">
            <GoDotFill />
            Our Services
        </div>
    </div>

    <div className="bg-indigo-900/10 rounded-3xl p-4 sm:p-6 lg:p-10 mt-6">

        {/* Heading */}
        <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Innovative Solutions for
                <span className="text-orange-500"> Digital Growth</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                We help businesses thrive in the digital era with cutting-edge
                web development, branding, marketing, and design solutions.
            </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-8">

            {/* Card 1 */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="group bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-red-100"
                >
                    <FaCode className="text-red-500 text-3xl" />
                </motion.div>

                <h3 className="mt-5 text-xl sm:text-2xl font-semibold">
                    Website Development
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Modern, responsive and high-performance websites that help
                    businesses establish a strong online presence.
                </p>

                <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 sm:gap-3 text-blue-600 font-semibold hover:border rounded-2xl hover:bg-blue-100 duration-200 px-3 py-2"
                >
                    Learn More
                    <FaArrowRightLong />
                </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="group bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                    }}
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100"
                >
                    <img
                        src={marketing}
                        alt="marketing"
                        className="w-8 h-8 object-contain"
                    />
                </motion.div>

                <h3 className="mt-5 text-xl sm:text-2xl font-semibold">
                    Social Media Marketing
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Increase brand awareness, engagement, and conversions through
                    strategic social media campaigns.
                </p>

                <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 sm:gap-3 text-blue-600 font-semibold hover:border rounded-2xl hover:bg-blue-100 duration-200 px-3 py-2"
                >
                    Learn More
                    <FaArrowRightLong />
                </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="group bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                    }}
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100"
                >
                    <FaPagelines className="text-green-500 text-3xl" />
                </motion.div>

                <h3 className="mt-5 text-xl sm:text-2xl font-semibold">
                    Graphic Designing
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Eye-catching visuals, branding materials, and creative assets
                    that strengthen your business identity.
                </p>

                <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 sm:gap-3 text-blue-600 font-semibold hover:border rounded-2xl hover:bg-blue-100 duration-200 px-3 py-2"
                >
                    Learn More
                    <FaArrowRightLong />
                </Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="group bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.9,
                    }}
                    className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-100"
                >
                    <IoMdColorPalette className="text-orange-500 text-3xl" />
                </motion.div>

                <h3 className="mt-5 text-xl sm:text-2xl font-semibold">
                    UI/UX Designing
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    User-centered interfaces and experiences that improve usability,
                    engagement, and customer satisfaction.
                </p>

                <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 sm:gap-3 text-blue-600 font-semibold hover:border rounded-2xl hover:bg-blue-100 duration-200 px-3 py-2"
                >
                    Learn More
                    <FaArrowRightLong />
                </Link>
            </motion.div>

        </div>
    </div>
</div>
        </>
    )
}

export default OurServices