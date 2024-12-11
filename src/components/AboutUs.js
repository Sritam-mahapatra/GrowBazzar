import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-green-50 py-12 px-6 sm:px-12">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Section 1: Title and Introduction */}
        <h1 className="text-5xl font-extrabold text-green-800 mb-6">
          Welcome to GrowBazzar
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          At GrowBazzar, we are committed to providing a seamless online marketplace for both buyers and sellers. Join us in our mission to create a thriving e-commerce ecosystem!
        </p>

        {/* Section 2: Our Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Mission"
              className="w-24 h-24 mb-4 rounded-full border-4 border-green-300"
            />
            <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to create a platform that offers high-quality products at affordable prices while supporting sellers to reach a wide customer base.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Vision"
              className="w-24 h-24 mb-4 rounded-full border-4 border-green-300"
            />
            <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              We envision becoming the go-to online marketplace where customers find the best deals and sellers grow their businesses sustainably.
            </p>
          </div>
        </div>

        {/* Section 3: Our Values */}
        <div className="bg-white py-10 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-4xl text-green-600 mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Customer First</h3>
              <p className="text-gray-700 mt-2">We prioritize the needs and satisfaction of our customers above all else.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-600 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Community</h3>
              <p className="text-gray-700 mt-2">We foster a supportive and collaborative environment for both buyers and sellers.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-600 mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
              <p className="text-gray-700 mt-2">We believe in constant innovation and strive to improve our platform and services continuously.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">Meet Our Team</h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-40 h-40 rounded-full border-4 border-green-300 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-40 h-40 rounded-full border-4 border-green-300 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">COO & Co-Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-40 h-40 rounded-full border-4 border-green-300 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
