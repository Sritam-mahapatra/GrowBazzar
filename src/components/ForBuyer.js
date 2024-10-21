// src/components/ForBuyer.js
import React from 'react';
import NavBar from './Navbar';

const ForBuyer = () => {
  return (
    <div>
      <NavBar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">For Buyers</h1>
        <p className="mb-8">Welcome to our marketplace for buyers! Here you can find a wide range of products.</p>
        {/* Add more content about the buyer's perspective */}
      </section>
    </div>
  );
};

export default ForBuyer;
