import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-sticker">Let's Connect! ✉️</div>
        <h2 className="contact-title">Interested in collaborating?</h2>
        <p className="contact-text">
          I'm currently looking for full-time opportunities in SRE or DevOps Roles. 
          Feel free to reach out for collaboration or inquiries!
        </p>
        <div className="social-links">
          <a href="https://linkedin.com/in/rafaelsetyadin" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/rafaelsety" className="social-btn github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <a href="mailto:rflqwerty06@gmail.com" className="email-link">rflqwerty06@gmail.com</a>
      </div>
      <footer className="compact-footer">
        <p>© {new Date().getFullYear()} Muhammad Rafael Setyadin. Built with React & Vite.</p>
      </footer>
    </section>
  );
};

export default Contact;
