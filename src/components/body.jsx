import React from 'react';
import '../components_css/body.css';

const Body = () => {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and services</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
      </section>
    </main>
  );
};

export default Body;