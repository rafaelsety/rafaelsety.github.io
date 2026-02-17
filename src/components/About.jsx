import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">My Journey</h2>
        <div className="about-text">
          <p className="about-para">
            I am a <strong>Best Graduate</strong> (IPK 4.00) in Information Systems 
            and an alumni of <strong>Bangkit Academy (Cloud Computing)</strong>. 
            My focus is on <strong>Site Reliability Engineering (SRE)</strong> and maintaining 
            mission-critical systems.
          </p>
          <p className="about-para">
            As a Certified BNSP Programmer and Freelance DevOps Engineer, I have practical experience 
            managing Linux VPS infrastructures, implementing server hardening, 
            and building automated backup pipelines and CI/CD workflows.
          </p>
          <p className="about-para">
            I am currently pursuing my S1 (Extension Program) with full flexibility 
            to work full-time. I thrive in environments that prioritize 
            reliability and system scalability.
          </p>
          <div className="cv-box">
            <a href="/cv-rafael.pdf" className="btn-oatside" download>Download Full Resume 📄</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
