import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FaShoppingCart,
  FaSignOutAlt,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.avif";

const Nav1 = ({ func }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btns = [
    {
      name: "Account",
      link: "#",
      icon: <FaUserCircle />,
      style: "text-gray-700 hover:text-black hover:bg-gray-100",
    },
    {
      name: "Cart",
      link: "#",
      icon: <FaShoppingCart />,
      style: "text-gray-700 hover:text-black hover:bg-gray-100 relative",
      badge: 3, // example badge count
    },
    {
      name: "Logout",
      link: "#",
      icon: <FaSignOutAlt />,
      func: func,
      style: "bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (btn) => {
    if (btn.func) {
      btn.func();
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 order-2 md:order-1">
            <img
              src={logo}
              alt="Logo"
              className="h-24 w-auto hover:opacity-80 transition-opacity duration-300"
            />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 order-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2.5 pr-12 rounded-full bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300 placeholder-gray-500 text-gray-800"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200">
                <CiSearch className="text-2xl text-gray-500" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex items-center space-x-3 order-3">
            {btns.map((btn) => (
              <button
                key={btn.name}
                onClick={() => handleButtonClick(btn)}
                className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-full font-medium transition-all duration-300 ${btn.style}`}
              >
                <span className="text-lg">{btn.icon}</span>
                <span className="hidden lg:inline">{btn.name}</span>
                {/* Badge for Cart */}
                {btn.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {btn.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200 order-3"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2.5 pr-12 rounded-full bg-gray-100 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all duration-300 placeholder-gray-500 text-gray-800"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200">
              <CiSearch className="text-2xl text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
          {btns.map((btn) => (
            <button
              key={btn.name}
              onClick={() => handleButtonClick(btn)}
              className={`w-full flex items-center justify-start space-x-3 px-4 py-3 rounded-md font-medium transition-all duration-300 ${btn.style}`}
            >
              <span className="text-xl">{btn.icon}</span>
              <span>{btn.name}</span>
              {btn.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {btn.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
