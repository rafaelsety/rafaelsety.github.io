import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Software Engineer <span className="sticker-tiny">Site Reliability focus</span></p>
        <h1 className="hero-name">Muhammad<br/>Rafael Setyadin</h1>
        <div className="hero-badges">
          <span className="sticker yellow">GPA 4.00 🌟</span>
          <span className="sticker pink">Best Graduate 🏆</span>
          <span className="sticker blue">SRE & DevOps 💻</span>
        </div>
        <div className="hero-description">
          Specializing in Linux infrastructure, server hardening, 
          and automated CI/CD pipelines. I build reliable, 
          scalable systems with a background in Cloud Computing from Bangkit Academy.
        </div>
        <div className="hero-links">
          <a href="#work" className="btn-oatside">Featured Work</a>
          <a href="#contact" className="btn-oatside secondary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
