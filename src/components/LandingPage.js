import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to Houseplants Store</h1>
      <p>Your one-stop shop for all your houseplant needs!</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;
