import React from "react";
import image from "../assets/image.png";
const CompanyInfo = () => {
  return (
   <>
 <div
  className="
    relative
    min-h-[500px] sm:min-h-[550px] md:min-h-[500px] lg:min-h-[618px]
    bg-contain md:bg-cover
    bg-right md:bg-right
    bg-no-repeat
    flex items-center
    overflow-hidden
  "
  style={{ backgroundImage: `url(${image})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* Badge */}
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-100 mb-5">
      <span className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></span>
      <p className="text-indigo-700 text-xs sm:text-sm md:text-base font-semibold">
        Our Commitment to Your Success
      </p>
    </div>

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4 max-w-3xl">
      Why Clients Choose Us
    </h2>

    {/* Underline */}
    <div className="w-20 sm:w-24 h-1 bg-indigo-600 rounded-full mb-6"></div>

    {/* Description */}
    <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
      We believe in building long-term relationships by delivering quality
      work and honest support. Your success is our mission.
    </p>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">

      <div className="flex items-center gap-3">
        <span className="text-indigo-600 text-xl font-bold">✓</span>
        <span className="text-slate-800 font-medium">
          Quality Work
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-indigo-600 text-xl font-bold">✓</span>
        <span className="text-slate-800 font-medium">
          Honest Support
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-indigo-600 text-xl font-bold">✓</span>
        <span className="text-slate-800 font-medium">
          Client Satisfaction
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-indigo-600 text-xl font-bold">✓</span>
        <span className="text-slate-800 font-medium">
          Long-Term Partnership
        </span>
      </div>

    </div>

  </div>
</div>
   </>
  );
};

export default CompanyInfo;




















