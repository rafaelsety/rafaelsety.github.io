import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Hobby from './components/Hobby';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate initial load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader finished={!loading} />
      <div className={`container ${!loading ? 'app-ready' : 'app-hidden'}`}>
        <Navbar />
        <main className="app-main">
          <Hero />
          <div className="section-fade">
            <About />
            <Work />
            <Hobby />
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
