import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LoginSeller = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add basic validation or login logic here
    // For now, we'll navigate to the Seller Admin Panel upon login
    navigate('/seller-admin'); // Redirect to Seller Admin Panel
  };

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">Seller Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md text-gray-700"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md text-gray-700"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginSeller;
