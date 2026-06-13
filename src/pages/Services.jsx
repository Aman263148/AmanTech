






import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaBullhorn,
  FaCloud,
  FaMobileAlt,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesHero from "../components/ServicesHero";
import ServiceDetailCard from "../components/ServiceDetailCard";
import ServicesDetails from "../components/ServicesDetails";
import WorkWithUs from "../components/WorkWithUs";

const ServicesBanner = () => {
 

  return (
    <>
    <Navbar/>
    <ServicesHero/>
    <ServicesDetails/>
    <WorkWithUs/>
    <Footer/>
    </>
  );
};

export default ServicesBanner;