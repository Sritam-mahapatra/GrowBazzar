import React from 'react';
import Slider from './Slider';
import ProductShowcase from './ProductShowcase';
import DiscountBanner from './DiscountBanner';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col">
      {/* <DiscountBanner 
        discount="20% OFF on all products!" 
        message="Limited Time Offer!" 
      /> */}
      <SearchBar />
      <Slider />
      
      <ProductShowcase />
    </div>
  );
}

export default Home;
