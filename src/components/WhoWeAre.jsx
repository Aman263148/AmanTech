import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10">

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
          >
            <h2 className="text-4xl font-bold">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              AmanTech is a forward-thinking digital agency committed to helping businesses thrive in the modern digital landscape. We specialize in web development, mobile application development, SaaS solutions, branding, graphic design, UI/UX design, and digital marketing services. Our team combines creativity, innovation, and cutting-edge technology to deliver high-quality solutions tailored to each client's unique goals. At AmanTech, we focus on building long-term partnerships by providing reliable support, exceptional user experiences, and scalable digital products. Whether you're a startup or an established business, we help transform ideas into impactful digital solutions that drive growth, engagement, and long-term success.
            </p>
          </motion.div>

          <div className="grid gap-5">

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-blue-50 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-blue-800">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-600">
                Empowering businesses with innovative, scalable, and result-driven digital solutions through web development, mobile applications, SaaS platforms, branding, and digital marketing to accelerate growth, enhance efficiency, and create lasting success.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-orange-50 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-orange-500">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-600">
                To become a trusted global technology partner, empowering businesses with innovative digital solutions, exceptional service, and long-term value that drives growth, transformation, and success in an evolving digital world.
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;