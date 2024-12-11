import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Perform any necessary logout operations (clear cookies, tokens, etc.)
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-2xl font-semibold">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://th.bing.com/th/id/R.c83b249c64943e53c12013e7a35da769?rik=xt%2bIZgvKL8%2fKLg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2014%2f10%2fGreen-logo.jpg&ehk=Q3AidRmxPk5TJDC%2fxeJCTBHjd2pUKm8fnsjvTKEWCjU%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo"
              className="w-8 h-8"
            />
            <span className="text-green-800">GrowBazzar</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-green-800 font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition duration-300">
            About Us
          </Link>
          <Link to="/for-buyer" className="hover:text-yellow-300 transition duration-300">
            For Buyers
          </Link>
          <Link to="/for-seller" className="hover:text-yellow-300 transition duration-300">
            For Sellers
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
            Contact Us
          </Link>

          {/* Conditionally render Login/Logout and Sign Up */}
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-300 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hover:text-yellow-300 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-300 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none">
            <i className="fa fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
