import React from "react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="bg-gradient-to-r from-blue-900 to-indigo-700 rounded-3xl p-10 md:p-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Whether you're a startup or an established business,
            AmanTech is ready to help bring your ideas to life.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;