// src/pages/Home.jsx
import React from 'react';
import '../styles/Hero.css';
import profile from '../assets/photo.jpg';
// import MernStack from '../assets/Mern-stack-.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h2>Hi, I'm Swathi</h2>
        <h3>Full Stack Developer | AI Agent </h3>
        <a href="#contact" className="herobtn-primary">Let's Connect</a>
      </div>
       
      <div className="hero-img">
        <img src={profile} alt="Swathi" />
      </div>
     

    </section>
  );
};

export default Hero;