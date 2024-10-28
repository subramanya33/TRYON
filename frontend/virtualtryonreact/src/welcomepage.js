// src/WelcomePage.js

import React from 'react';
import { useHistory } from 'react-router-dom';
import './welcomepage.css'; // Optional: for additional styling

const welcomepage = () => {
  const history = useHistory();

  const goToTryOn = () => {
    history.push('/tryon');
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Virtual Try-On</h1>
      <img src="your-image-url.jpg" alt="Welcome" />
      <button onClick={goToTryOn}>Try On Outfits</button>
    </div>
  );
};

export default welcomepage;
