import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Welcome to Weather App</h1>
      <Link to="/weather">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Home;
