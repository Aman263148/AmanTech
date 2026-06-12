import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

    {/* Top Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Company Info */}
      <div>
        <p className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          <span className="text-blue-500">A</span>
          <span className="text-orange-500">man</span>
          <span className="text-blue-500">Tech</span>
        </p>

        <p className="text-gray-400 leading-relaxed">
          Delivering innovative digital solutions that help businesses
          grow, transform, and succeed in the modern world.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-400">
          <li>
            <Link
              to="/"
              className="hover:text-indigo-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-indigo-400 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="hover:text-indigo-400 transition duration-300"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-indigo-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">
          Services
        </h3>

        <ul className="space-y-3 text-gray-400">
          <li>Web Development</li>
          <li>Mobile Apps</li>
          <li>UI/UX Design</li>
          <li>Digital Solutions</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">
          Contact
        </h3>

        <div className="space-y-3 text-gray-400">
          <p>📧 contact@amantech.com</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>📍 India</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 transition duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-600 transition duration-300"
          >
            <FaGithub />
          </a>

        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-slate-800 mt-10 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} AmanTech. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-500">
          <Link
            to="/privacy-policy"
            className="hover:text-indigo-400 transition duration-300"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="hover:text-indigo-400 transition duration-300"
          >
            Terms & Conditions
          </Link>
        </div>

      </div>
    </div>

  </div>
</footer>
  );
};

export default Footer;