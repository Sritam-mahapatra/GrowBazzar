import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ForSeller = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">For Sellers</h1>
      <p className="text-gray-700 text-lg leading-8 mb-6">
        Welcome to the <span className="font-semibold text-green-800">GrowBazzar</span> seller portal! 
        Here, you can grow your business by listing your products and reaching a wide range of customers.
      </p>

      {/* How to Get Started Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">How to Get Started</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Register an account on our platform as a seller.</li>
          <li>Fill out your business details and upload your products.</li>
          <li>Set competitive prices and add high-quality images to attract customers.</li>
          <li>Start receiving and managing orders from your dashboard.</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Why Sell with Us?</h2>
        <p className="text-gray-700 leading-8">
          GrowBazzar offers the following features to help sellers succeed:
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-4">
          <li>Easy-to-use dashboard for managing your products and orders.</li>
          <li>Wide customer base to boost your sales.</li>
          <li>Secure payment gateways ensuring timely payments.</li>
          <li>Detailed analytics to track your sales performance.</li>
          <li>Dedicated customer support for sellers.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="bg-green-100 p-6 rounded-md text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Ready to Start Selling?</h3>
        <p className="text-gray-700 mb-6">
          Join our platform today and take your business to the next level. Sign up now and experience seamless selling like never before!
        </p>
        <Link
          to="/login-seller" // Change this to navigate to the LoginSeller page
          className="bg-green-800 text-white py-2 px-6 rounded hover:bg-green-700 transition duration-300"
        >
          Sign Up as a Seller
        </Link>
      </div>
    </div>
  );
};

export default ForSeller;
