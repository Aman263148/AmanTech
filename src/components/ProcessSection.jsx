import React from "react";
import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your business goals and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Creating a strategy and roadmap for success.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crafting intuitive and visually appealing experiences.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Building scalable, secure and high-performing solutions.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploying and supporting your project for growth.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center">
          <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-medium">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            How We Bring Ideas To Life
          </h2>
        </div>

        <div className="relative mt-20">

          <div className="absolute hidden lg:block top-10 left-0 w-full h-1 bg-blue-100"></div>

          <div className="grid lg:grid-cols-5 gap-8">

            {process.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-xl mx-auto">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-center">
                  {step.title}
                </h3>

                <p className="mt-3 text-center text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;