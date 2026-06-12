import React from "react";
import ServiceDetailCard from "./ServiceDetailCard";

import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

import {
  FaCode,
  FaBullhorn,
  FaCloud,
  FaVideo,
} from "react-icons/fa6";

import { IoMdColorPalette } from "react-icons/io";

const ServicesDetails = () => {
  const services = [
    {
      title: "Website Development",
      icon: <FaCode />,
      color: "bg-red-100 text-red-500",
      cardId:"web-dev",
      description:
        "We create modern, responsive and high-performance websites that help businesses establish a powerful online presence and generate more leads.",

      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Modern UI",
        "Secure Coding",
        "Scalable Architecture",
      ],
    },

    {
      title: "Social Media Marketing",
      icon: <FaBullhorn />,
      color: "bg-purple-100 text-purple-500",
      cardId:"marketing",
      description:
        "Grow your brand visibility and attract customers with strategic social media campaigns tailored to your business goals.",

      features: [
        "Facebook Marketing",
        "Instagram Growth",
        "Content Strategy",
        "Paid Advertising",
        "Lead Generation",
        "Analytics Reporting",
      ],
    },

    {
      title: "Graphic Designing",
      icon: <FaPaintBrush />,
      color: "bg-green-100 text-green-500",
      cardId:"graphics-designing",
      description:
        "Professional graphic design services to strengthen your brand identity and make your business stand out.",

      features: [
        "Logo Design",
        "Brand Identity",
        "Social Media Posts",
        "Business Cards",
        "Banners",
        "Marketing Materials",
      ],
    },

    {
      title: "UI/UX Designing",
      icon: <IoMdColorPalette />,
      color: "bg-orange-100 text-orange-500",
      cardId:"ui-ux",
      description:
        "Design engaging user experiences and beautiful interfaces that improve customer satisfaction and conversion rates.",

      features: [
        "Wireframing",
        "User Research",
        "Interactive Prototypes",
        "Mobile UI",
        "Web UI",
        "Design Systems",
      ],
    },

    {
      title: "SaaS Development",
      icon: <FaCloud />,
      color: "bg-blue-100 text-blue-500",
      cardId:"saas",
      description:
        "Build scalable Software-as-a-Service platforms with secure architecture, subscription systems and cloud infrastructure.",

      features: [
        "Cloud Applications",
        "Subscription Systems",
        "Admin Dashboards",
        "API Development",
        "Authentication",
        "Scalable Infrastructure",
      ],
    },

    {
      title: "Mobile App Development",
      icon: <FaMobileAlt />,
      color: "bg-cyan-100 text-cyan-500",
      cardId:"apps-dev",
      description:
        "Custom Android and iOS applications designed to provide seamless user experiences and business growth.",

      features: [
        "Android Apps",
        "iOS Apps",
        "Cross Platform",
        "Firebase Integration",
        "App Deployment",
        "Maintenance Support",
      ],
    },

    {
      title: "Video & Photo Editing",
      icon: <FaVideo />,
      color: "bg-pink-100 text-pink-500",
      cardId:"video-editing",
      description:
        "Professional editing services for promotional videos, social media content, advertisements and branding materials.",

      features: [
        "Video Editing",
        "Photo Retouching",
        "Color Grading",
        "Motion Graphics",
        "Short Reels",
        "Brand Content",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Detailed Services
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore the complete range of digital services
            offered by AmanTech to help your business grow.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceDetailCard
              key={index}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesDetails;