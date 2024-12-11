// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Make sure this is imported to apply Tailwind styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
