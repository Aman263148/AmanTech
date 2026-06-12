import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Logo from "../assets/logo.png";

const  Navbar= ()=> {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12"
        />

        <p className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className="text-blue-900">A</span>
          <span className="text-orange-500">man</span>
          <span className="text-blue-900">Tech</span>
        </p>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-12">
        <ol className="flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium transition-all duration-200 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    )}
                    {item.name}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ol>

        <Link
          to="/contact"
          className="px-5 py-2 text-lg transition-all duration-300 border rounded-full hover:bg-blue-800 hover:border-blue-800 hover:text-white"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose size={28} />
        ) : (
          <FaBars size={28} />
        )}
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      }`}
    >
      <ol className="flex flex-col gap-5 pt-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 font-medium ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  )}
                  {item.name}
                </>
              )}
            </NavLink>
          </li>
        ))}

        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="w-fit px-5 py-2 border rounded-full transition-all duration-300 hover:bg-blue-800 hover:border-blue-800 hover:text-white"
        >
          Contact
        </Link>
      </ol>
    </div>
  </div>
</nav>
  );
}

export default Navbar;