// src/components/ContactUs.js
import React from 'react';
import NavBar from './Navbar';

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">Feel free to reach out to us with any questions or concerns!</p>
        {/* Add contact form or contact details */}
      </section>
    </div>
  );
};

export default ContactUs;
