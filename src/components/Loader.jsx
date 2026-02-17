import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ finished }) => {
  return (
    <div className={`loader-screen ${finished ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-doodle">🎨</div>
        <h2 className="loader-text">Doodling...</h2>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
