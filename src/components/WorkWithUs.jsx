import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaCheckCircle,
  FaRocket,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const WorkWithUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-8 md:p-12 lg:p-16">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Let's Build Something Amazing
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Business Deserves More Than Just a Service Provider
            </h2>

            <p className="mt-6 text-blue-100 text-lg leading-relaxed">
              At AmanTech, we don't just complete projects — we become your
              technology partner. Whether you're launching a startup,
              growing your brand, or scaling your business, we create
              digital solutions that deliver measurable results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Start Your Project
                <FaArrowRightLong />
              </Link>

              <Link
                to="/about-us"
                className="inline-flex items-center gap-3 border border-white/30 text-white hover:bg-white hover:text-blue-900 px-7 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className="text-orange-400 text-3xl">
                <FaRocket />
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl">
                  Fast & Modern Solutions
                </h3>

                <p className="text-blue-100 mt-2">
                  Cutting-edge technologies designed for performance,
                  scalability and future growth.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className="text-orange-400 text-3xl">
                <FaHeadset />
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl">
                  Dedicated Support
                </h3>

                <p className="text-blue-100 mt-2">
                  We stay with you before, during and after launch to
                  ensure long-term success.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className="text-orange-400 text-3xl">
                <FaShieldAlt />
              </div>

              <div>
                <h3 className="text-white font-semibold text-xl">
                  Reliable Partnership
                </h3>

                <p className="text-blue-100 mt-2">
                  Transparent communication, on-time delivery and a
                  commitment to quality in every project.
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 text-white">
              <FaCheckCircle className="text-green-400" />
              <span>Custom solutions tailored to your goals</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-green-400" />
              <span>Focused on business growth and ROI</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-green-400" />
              <span>Long-term support and maintenance</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;