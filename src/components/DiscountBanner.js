import React from 'react';

const DiscountBanner = ({ discount, message }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">{discount}</h1>
          <p className="mt-2 text-lg">{message}</p>
        </div>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-md hover:bg-blue-100 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountBanner;
