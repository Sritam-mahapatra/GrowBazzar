import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Login from './components/Login'; // Login page for Buyers
import LoginSeller from './components/LoginSeller'; // Login page for Sellers
import SignUp from './components/SignUp'; // SignUp component
import ForSeller from './components/ForSeller'; // For Sellers Page
import SellerAdminPanel from './components/SellerAdminPanel'; // Seller Admin Panel

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          {/* Route Definitions */}
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/contact" element={<ContactUs />} /> {/* Contact Us Page */}
          <Route path="/about" element={<AboutUs />} /> {/* About Us Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page for Buyers */}
          <Route path="/login-seller" element={<LoginSeller />} /> {/* Login Page for Sellers */}
          <Route path="/signup" element={<SignUp />} /> {/* Sign Up Page */}
          <Route path="/for-seller" element={<ForSeller />} /> {/* For Sellers Page */}
          <Route path="/seller-admin" element={<SellerAdminPanel />} /> {/* Seller Admin Panel */}
        </Routes>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
