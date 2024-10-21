import React, { useState } from 'react';

const Slider = () => {
  // Array of product images (replace these with actual URLs)
  const images = [
    'https://imgs.search.brave.com/bWBtMqzoQWJUrd1ozPhgA5Loo0Wby-6DEYrGfvrY7S0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb3ctaXMtc3Rh/bmRpbmctYm90dGxl/LW1pbGstYm90dGxl/LW1pbGtfMTAxNTM4/NC0xODg3MDQuanBn/P3NpemU9NjI2JmV4/dD1qcGc',
    'https://imgs.search.brave.com/gKaqGfQGNBZVbWD92XE9tkXDz-Z9jcwVA3atVzVTwNA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/Nzk5NjkwL3Bob3Rv/L2hvbmV5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IczNH/NHZaS0xVRU53Qnl5/bVBUTUxReG9ieVBG/VHpSZkJRN00tZF9F/RjdrPQ',
    'https://imgs.search.brave.com/Gb71T_LF8-qT3bTYaZOjQ1mW5bfantnj-9xLaDKUfzc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFueWFuYm90YW5p/Y2Fscy5jb20vY2Ru/L3Nob3AvZmlsZXMv/Z2hlZS0zMTY1LWNv/bnRleHQtMDAxLmpw/Zz92PTE3MTgwNTUy/MTQmd2lkdGg9MTk0/Ng',
    'https://imgs.search.brave.com/MlzDs7xPyXFeHHFdJGObiAyRUyqQWmRQ3bATv1jZqrw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/Mjc4NzkxL3Bob3Rv/L2ZydWl0LWNvbXBv/c2l0aW9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pR29J/MGhKRW41U0xMdDhs/MHFzaFBYYzVjREFu/ZWRVZGxoalBzNUU2/WXdVPQ',
  ];

  // State to track the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handler for next button
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handler for previous button
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Slider (Rectangular, Rounded, Detached from Navbar) */}
      <div className="w-3/4 h-2/3 bg-white shadow-xl rounded-3xl flex overflow-hidden transform transition duration-500 hover:scale-105">
        {/* Left Side: Advertisement or Text */}
        <div className="w-1/2 bg-gradient-to-r from-green-400 to-blue-500 text-white flex flex-col justify-center items-center p-8 space-y-6">
          <h2 className="text-5xl font-extrabold mb-4 tracking-wide">
            Farm Fresh Products!
          </h2>
          <p className="text-xl text-center leading-relaxed">
            At <span className="font-bold">Grow Bazzar</span>, you can buy fresh milk, honey, ghee, and fruits directly from local farmers. Enjoy healthy, organic food delivered to your doorstep.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1"
            >
              Next
            </button>
          </div>
        </div>

        {/* Right Side: Image Slider */}
        <div className="w-1/2 flex justify-center items-center p-4 relative">
          <img
            src={images[currentImageIndex]}
            alt={`Product ${currentImageIndex + 1}`}
            className="rounded-lg shadow-lg max-w-full max-h-full transition-opacity duration-1000 opacity-100"
            style={{ objectFit: 'cover' }}
          />
          {/* Removed the product tag */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
