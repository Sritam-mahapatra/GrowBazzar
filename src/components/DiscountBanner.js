import React from 'react';

const DiscountBanner = ({ discount, message }) => {
  return (
    <div className="bg-orange-500 text-white py-4 text-center">
      <h2 className="text-2xl font-bold">{message}</h2>
      <p className="text-xl">{discount}</p>
    </div>
  );
};

export default DiscountBanner;
