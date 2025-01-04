import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ButtonHollow from "./ButtonHollow";
// import ButtonFilled from "./ButtonFilled";
// import lwk from "../assets/images/lwk_logos/favicons/living-with-krishna-high-resolution-logo-transparent-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <nav className="bg-white shadow-md w-full z-[1000] sticky top-0">
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        <div className="flex justify-around md:justify-between items-center h-16">
          {/* Mobile: Menu Button + Logo */}
          <div className="md:hidden flex items-center space-x-4">
            {!isOpen && (
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-orange-500 focus:outline-none z-50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            )}

            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-black mx-auto">
              {/* <img src={lwk} alt="Living with Krishna" className="w-8 h-auto" /> */}
            </Link>
          </div>

          {/* Desktop: Logo + Search Bar */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-black">
              {/* <img src={lwk} alt="Living with Krishna" className="w-8 h-auto" /> */} BIZ
            </Link>
            
          </div>

          {/* Desktop: Search Bar */}
          <div className="hidden md:flex flex-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm rounded-full border border-black bg-transparent focus:outline-none"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/plans-and-pricing" className="text-gray-800 hover:text-orange-500 font-normal">
              Plans & Pricing
            </Link>
            <Link to="/become-an-instructor" className="text-gray-800 hover:text-orange-500 font-normal">
              Become an Instructor
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-orange-500 font-normal">
              Contact
            </Link>
            {/* <div className="flex space-x-2">
              <Link to='/login'><ButtonHollow>Log In</ButtonHollow></Link>
              <Link to='/signup'><ButtonFilled>Sign Up</ButtonFilled></Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "70%" }}
      >
        {/* Menu Button (Close Icon) */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-800 bg-gray-100 rounded-full p-2 shadow-lg hover:bg-gray-200 focus:outline-none z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="px-4 py-2 mt-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 bg-gray-100 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Menu Links */}
        <div className="mt-6 space-y-4 px-4">
          <Link to="/categories" className="block text-lg text-gray-800 hover:text-orange-500" onClick={toggleMenu}>
            Categories
          </Link>
          <Link to="/explore" className="block text-lg text-gray-800 hover:text-orange-500" onClick={toggleMenu}>
            Explore
          </Link>
          <Link to="/plans-and-pricing" className="block text-lg text-gray-800 hover:text-orange-500" onClick={toggleMenu}>
            Plans & Pricing
          </Link>
          <Link to="/become-an-instructor" className="block text-lg text-gray-800 hover:text-orange-500" onClick={toggleMenu}>
            Become an Instructor
          </Link>
          <Link to="/contact" className="block text-lg text-gray-800 hover:text-orange-500" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;