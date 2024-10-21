// src/components/AboutUs.js
import React from 'react';
import NavBar from './Navbar'; // Ensure this is correct

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-8">We are Grow Bazzar, providing the best products at affordable prices.</p>
      </section>
    </div>
  );
};

export default AboutUs;
