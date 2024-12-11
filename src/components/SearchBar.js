import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="relative w-full max-w-xl">
        {/* Search Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-6 py-3 pl-12 rounded-lg border-2 border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300 transform hover:scale-105"
          placeholder="Search for products..."
        />
        
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 transition-all duration-300">
          <FaSearch className="text-xl" />
        </div>
        
        {/* Clear Button */}
        {searchTerm && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition duration-300"
            onClick={handleClear}
          >
            <FaTimes className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
