import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    title: "Projects Delivered",
  },
  {
    number: "30+",
    title: "Happy Clients",
  },
  {
    number: "5+",
    title: "Digital Services",
  },
  {
    number: "24/7",
    title: "Support Available",
  },
];

const CompanyStats = () => {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-[40px] p-10 md:p-16">

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              AmanTech In Numbers
            </h2>

            <p className="text-blue-100 mt-4">
              Results that reflect our commitment and dedication.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="text-center"
              >
                <h3 className="text-5xl md:text-6xl font-bold text-orange-400">
                  {stat.number}
                </h3>

                <p className="mt-3 text-blue-100">
                  {stat.title}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyStats;