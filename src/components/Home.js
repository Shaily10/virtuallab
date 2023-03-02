import React from 'react';
import "../styles/home.css";
import { Link } from 'react-router-dom';
import img from "../components/vlab_home.jpg"

function Home() {
  return (
    <div className="home-container">
      <img className="img" src={img} alt="Vlab welcome img" />
      <h1 className="home-title">Welcome to My Virtual Lab</h1>
      <p className="home-description">Explore our virtual experiments and discover the world of science!</p>
      <div className="home-buttons">
          <Link to='/sub' className="home-link">
          <button className="home-button">Browse Subjects</button></Link>
          <button className="home-button">Learn More</button>
      </div>
    </div>
  );
}

export default Home;

