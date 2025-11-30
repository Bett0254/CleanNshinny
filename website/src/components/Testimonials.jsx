import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonial-content">
        <h2>What People Are Saying About Us</h2>
        <div className="review-card">
          <p className="reviewer-name">Ezra Michaels</p>
          <p className="reviewer-title">Manager of the Trippe S SaCCO</p>
          <blockquote className="review-text">
            "They have a perfect touch for making something so amazing, different and useful
            for a lot of people..."
          </blockquote>
          <div className="arrow-nav">
            <button className="arrow left-arrow">←</button>
            <button className="arrow right-arrow">→</button>
          </div>
        </div>
      </div>
      <div className="testimonial-image">
        <img src="public/Images/mobile van.jpg" alt="mobile car wash van" />
      </div>
    </section>
  );
}
