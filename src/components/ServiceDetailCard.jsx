import React from "react";
import { motion } from "framer-motion";

const ServiceDetailCard = ({
  icon,
  title,
  description,
  features,
  color,
  cardId,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id={cardId}
      className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 scroll-mt-30"
    >
      <div
        className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl ${color}`}
      >
        {icon}
      </div>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-slate-600 leading-relaxed">
        {description}
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>

            <p className="text-slate-700">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceDetailCard;