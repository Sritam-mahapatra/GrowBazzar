import React from 'react';

const NavBar = () => {
  const logoUrl = 'https://imgs.search.brave.com/2ILI3jVOgOw7SpckvqFfEjDgKBD_i0rA5cKzZ90PeiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzkwLzQwLzI4/LzM2MF9GXzkwNDAy/ODU0X2ZCalUwMGpZ/cUtLTHFoRnZDZ0ti/eWdhS3FHTXpwRkFL/LmpwZw'; // Replace with your actual logo URL

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt="Grow Bazzar Logo"
            className="h-10 w-10 rounded-full mr-3" // Circular Logo
          />
          <h1 className="text-white text-2xl font-extrabold tracking-wider">Grow Bazzar</h1>
        </div>
        <ul className="flex space-x-8 text-white font-serif text-lg">
          <li className="relative group">
            <a href="/" className="transition-all ease-in-out duration-300 hover:text-orange-500 hover:underline">Home</a>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/aboutus" className="transition-all ease-in-out duration-300 hover:text-orange-500 hover:underline">About Us</a>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/forbuyer" className="transition-all ease-in-out duration-300 hover:text-orange-500 hover:underline">For Buyer</a>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/forseller" className="transition-all ease-in-out duration-300 hover:text-orange-500 hover:underline">For Seller</a>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></div>
          </li>
          <li className="relative group">
            <a href="/contactus" className="transition-all ease-in-out duration-300 hover:text-orange-500 hover:underline">Contact Us</a>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
