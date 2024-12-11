import React from 'react';

const DiscountBanner = () => {
  return (
    <div
      className="relative w-full h-80 flex items-center justify-center text-center bg-cover bg-center mt-3"
      style={{
        backgroundImage: 'url(https://th.bing.com/th/id/OIP.m7vvWmE3thAFzjURxNcIFAHaE5?rs=1&pid=ImgDetMain)', // Replace with your image URL
        backgroundColor: '#e0f7e9', // Fallback light green color
        opacity: 1,
      }}
    >
      {/* Overlay for dimming the background image */}
      <div
        className="absolute inset-0 bg-white opacity-50"
        style={{ mixBlendMode: 'multiply' }}
      ></div>

      {/* Discount description */}
      <div className="relative z-10 px-8 py-6 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Special Discount!
        </h1>
        <p className="text-lg text-gray-800 mb-6">
          Enjoy up to <span className="text-green-600 font-semibold">50% OFF</span> on our exclusive products.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
