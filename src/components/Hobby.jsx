import React from 'react';
import './Hobby.jsx'; // We'll rename this to Hobby.css in the next tool call
import './Hobby.css';

const Hobby = () => {
  return (
    <section id="hobby" className="hobby-section">
       <div className="hobby-container">
          <div className="hobby-label">Creative Outlet</div>
          <h2 className="hobby-title">Beyond the Code</h2>
          <p className="hobby-text">
            For balance, I enjoy traditional sketching and digital doodles. 
            It's a small creative outlet that keeps my engineering perspective fresh.
          </p>
          <div className="hobby-placeholder">
             {/* Subtle drawing placeholder */}
             <div className="hobby-sketch-box">
                <span className="sketch-icon">🎨</span>
                <p>Sketch Gallery Coming Soon</p>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Hobby;
