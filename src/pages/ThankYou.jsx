import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import happyImage from "../assets/thank-you.png";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${happyImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">

        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full mb-6">
          ✓ Inquiry Submitted Successfully
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
          Thank You!
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-700">
          Your inquiry has been submitted successfully.
        </p>

        <p className="mt-4 text-lg md:text-xl font-semibold text-blue-800">
          Our team will get in touch with you within
          <span className="text-orange-500"> 2–3 business days.</span>
        </p>

        <div className="mt-10">
          <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-600 px-6 py-3 rounded-full font-medium">
            Redirecting to homepage...
          </div>
        </div>

      </div>
    </section>
  );
};

export default ThankYou;