import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [userType, setUserType] = useState(null); // Track if logged in as buyer/seller
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    // Perform any necessary logout operations (clear cookies, tokens, etc.)
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <Link to="/for-seller" className="hover:text-yellow-300 transition duration-300">
            For Sellers
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
            Contact Us
          </Link>
          
          {/* Login/Sign Up Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 hover:text-yellow-300 transition duration-300"
            >
              <FaUserCircle className="text-2xl" />
              <span>{isLoggedIn ? (userType === 'seller' ? 'Seller' : 'Buyer') : 'Account'}</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 py-2 z-10">
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login-buyer"
                      className="block px-4 py-2 text-green-800 hover:bg-green-100"
                    >
                      Login as Buyer
                    </Link>
                    <Link
                      to="/login-seller"
                      className="block px-4 py-2 text-green-800 hover:bg-green-100"
                    >
                      Login as Seller
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-green-800 hover:bg-green-100"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-green-800 hover:bg-green-100"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
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
