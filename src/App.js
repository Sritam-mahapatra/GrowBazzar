import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductShowcase from './components/ProductShowcase'; // If inside the same folder
import DiscountBanner from './components/DiscountBanner';



function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      <DiscountBanner 
        discount="20% OFF on all products!" 
        message="Limited Time Offer!" 
      />
      <Slider />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default Home;
