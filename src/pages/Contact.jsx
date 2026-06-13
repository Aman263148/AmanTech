import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const email = import.meta.env.VITE_FORMSUBMIT_EMAIL;
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-100 via-white to-blue-50 min-h-screen pt-10 pb-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Header */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-700"></span>
              Contact AmanTech
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-slate-900">
              Let's Build Something
              <span className="text-orange-500"> Amazing</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your project and our team will get back
              to you as soon as possible.
            </p>

          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto mt-14"
          >
            <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-8 md:p-12">

              <form
                action={`https://formsubmit.co/${email}`}
                method="POST"
                className="space-y-6"
              >
                {/* Redirect */}
                <input
                  type="hidden"
                  name="_next"
                  value={`https://aman-tech-six.vercel.app//thank-you`}
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="New AmanTech Lead"
                />

                {/* Name */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="Company"
                    required
                    placeholder="Your company name"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="Phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-slate-200 rounded-xl px-5 py-4 outline-none focus:border-blue-700"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;