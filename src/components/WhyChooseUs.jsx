import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    title: "Innovation First",
    description:
      "We use modern technologies and creative thinking to build future-ready solutions.",
    icon: <FaLightbulb />,
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    title: "Quality Focused",
    description:
      "Every project is crafted with attention to detail, performance and scalability.",
    icon: <FaShieldAlt />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Business Growth",
    description:
      "Our solutions are designed to help businesses attract customers and increase revenue.",
    icon: <FaRocket />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Client Partnership",
    description:
      "We work closely with clients to build long-term relationships and trust.",
    icon: <FaUsers />,
    color: "bg-green-100 text-green-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center">
          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium">
            Why Choose AmanTech
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Your Trusted Digital Partner
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            We combine innovation, creativity and technology to help
            businesses achieve sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;