import React from "react";
import heroImg from '../assets/Images/hero-section.jpeg';


export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('src/assets/Images/hero-section.jpg')" }}
    >
      <div className="hero-content">
        <h1>Bring Back the shine your car deserves</h1>
        <p>Need a Wash?</p>
        <button className="shop-btn">Book Now</button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <p className="stat-number">3</p>
          <p className="stat-label">Year Experience</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">2</p>
          <p className="stat-label">Counties opened in</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">5k+</p>
          <p className="stat-label">Customers</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">20+</p>
          <p className="stat-label">Services Offered</p>
        </div>
      </div>
    </section>
  );
}
