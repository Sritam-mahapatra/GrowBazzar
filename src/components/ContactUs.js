import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic (e.g., send form data to an API or email service)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-green-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you! Please reach out with any questions or feedback.</p>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-4xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-700">Our Contact Information</h2>
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> <a href="mailto:support@company.com" className="text-green-700">support@company.com</a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> <a href="tel:+123456789" className="text-green-700">+1 (234) 567-89</a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Address:</strong> 123 Main Street, City, State, ZIP Code
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your message"
                  rows="5"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section (optional) */}
      {/* <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; 2024 GrowBazzar. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default ContactUs;
