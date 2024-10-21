// src/components/ForSeller.js
import React from 'react';
import NavBar from './Navbar';

const ForSeller = () => {
  return (
    <div>
      <NavBar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">For Sellers</h1>
        <p className="mb-8">Join us as a seller! Grow your business by reaching out to a larger audience.</p>
        {/* Add more content about the seller's perspective */}
      </section>
    </div>
  );
};

export default ForSeller;
