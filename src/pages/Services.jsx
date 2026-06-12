// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { FaMobileAlt } from "react-icons/fa";
// import { FaPaintBrush } from "react-icons/fa";
// import {
//   FaCode,
//   FaBullhorn,
//   FaCloud,
//   FaVideo,
//   FaArrowRightLong,
// } from "react-icons/fa6";

// import { IoMdColorPalette } from "react-icons/io";
// const Services = () => {

//   const services = [
//   {
//     title: "Website Development",
//     icon: <FaCode />,
//     color: "bg-red-100 text-red-500",
//     description:
//       "Modern, responsive and high-performance websites tailored to your business goals.",
//   },
//   {
//     title: "Social Media Marketing",
//     icon: <FaBullhorn />,
//     color: "bg-purple-100 text-purple-500",
//     description:
//       "Strategic campaigns that increase engagement, reach and conversions.",
//   },
//   {
//     title: "Graphic Designing",
//     icon: <FaPaintBrush />,
//     color: "bg-green-100 text-green-500",
//     description:
//       "Creative branding materials, social posts and professional visuals.",
//   },
//   {
//     title: "UI/UX Designing",
//     icon: <IoMdColorPalette />,
//     color: "bg-orange-100 text-orange-500",
//     description:
//       "Beautiful and user-friendly interfaces that improve customer experience.",
//   },
//   {
//     title: "SaaS Development",
//     icon: <FaCloud />,
//     color: "bg-blue-100 text-blue-500",
//     description:
//       "Scalable SaaS platforms with secure architecture and modern technologies.",
//   },
//   {
//     title: "Mobile App Development",
//     icon: <FaMobileAlt />,
//     color: "bg-cyan-100 text-cyan-500",
//     description:
//       "Cross-platform and native mobile applications for Android and iOS.",
//   },
//   {
//     title: "Video & Photo Editing",
//     icon: <FaVideo />,
//     color: "bg-pink-100 text-pink-500",
//     description:
//       "Professional editing services for branding, marketing and social media.",
//   },
// ];

// const process = [
//   "Discover",
//   "Planning",
//   "Design",
//   "Development",
//   "Launch",
// ];



//   return (
//     <>
//       <>
//   <Navbar />

  {/* Hero */}
  {/* <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-center">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
          Our Services
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900"
      >
        Digital Solutions That
        <span className="text-orange-500"> Drive Growth</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
      >
        We help businesses establish a strong digital presence through
        modern development, creative design, marketing and scalable
        technology solutions.
      </motion.p>
    </div>
  </section> */}

  {/* Services */}
  {/* <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          What We Offer
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
          >
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${service.color}`}
            >
              {service.icon}
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-blue-700 font-semibold"
            >
              Get Started
              <FaArrowRightLong />
            </Link>
          </motion.div>
        ))}
      </div>

    </div>
  </section> */}

  {/* Why Choose Us */}
  {/* <section className="bg-slate-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      <h2 className="text-center text-4xl md:text-5xl font-bold">
        Why Choose AmanTech?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-14">

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold">
            Innovation
          </h3>

          <p className="mt-4 text-gray-600">
            Future-ready solutions built using modern technologies.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold">
            Quality
          </h3>

          <p className="mt-4 text-gray-600">
            Clean, scalable and professional digital products.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold">
            Support
          </h3>

          <p className="mt-4 text-gray-600">
            Dedicated assistance and long-term partnerships.
          </p>
        </motion.div>

      </div>
    </div>
  </section> */}

  {/* Process */}
  {/* <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      <h2 className="text-center text-4xl md:text-5xl font-bold">
        Our Process
      </h2>

      <div className="grid md:grid-cols-5 gap-6 mt-14">

        {process.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 rounded-3xl p-8 text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-xl">
              {index + 1}
            </div>

            <h3 className="mt-4 font-semibold text-lg">
              {item}
            </h3>
          </motion.div>
        ))}

      </div>
    </div>
  </section> */}

  {/* CTA */}
  {/* <section className="pb-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

      <div className="bg-gradient-to-r from-blue-900 to-indigo-700 rounded-3xl p-10 md:p-16 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Ready to Start Your Project?
        </h2>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Let's create something amazing together and grow your
          business with innovative digital solutions.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
        >
          Contact Us
        </Link>

      </div>

    </div>
  </section> */}

  {/* <Footer />
</>
    </>
  )
}

export default Services */}










import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaBullhorn,
  FaCloud,
  FaMobileAlt,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServiceDetailCard from "../components/ServiceDetailCard";
import ServicesDetails from "../components/ServicesDetails";
import WorkWithUs from "../components/WorkWithUs";

const ServicesBanner = () => {
  // const services = [
  //   {
  //     icon: <FaCode />,
  //     title: "Web Development",
  //     position: "top-[8%] left-[55%]",
  //   },
  //   {
  //     icon: <FaBullhorn />,
  //     title: "Marketing",
  //     position: "top-[10%] right-[12%]",
  //   },
  //   {
  //     icon: <FaCloud />,
  //     title: "SaaS Development",
  //     position: "top-[42%] right-[2%]",
  //   },
  //   {
  //     icon: <FaMobileAlt />,
  //     title: "Mobile Apps",
  //     position: "bottom-[18%] right-[4%]",
  //   },
  //   {
  //     icon: <IoMdColorPalette />,
  //     title: "UI/UX Design",
  //     position: "bottom-[8%] left-[50%]",
  //   },
  //   {
  //     icon: <FaPaintBrush />,
  //     title: "Graphic Design",
  //     position: "top-[50%] left-[38%]",
  //   },
  //   {
  //     icon: <FaVideo />,
  //     title: "Video Editing",
  //     position: "bottom-[18%] left-[45%]",
  //   },
  // ];

  return (
    <>
    <Navbar/>
    <ServicesHero/>
    <ServicesDetails/>
    <WorkWithUs/>
    <Footer/>
    </>
  );
};

export default ServicesBanner;