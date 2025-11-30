import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">Clean N'Shinny</div>
        <div className="social-icons"></div>
      </div>

      <div className="footer-links-grid">
        <div className="footer-col">
          <h3>Our services</h3>
          <ul>
            <li>Cars</li>
            <li>Detailing products</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Top Features</h3>
          <ul>
            <li>Eco-Friendly</li>
            <li>Express</li>
            <li>Mobile wash & Pick up Services</li>
            <li>Scratch & Swirl Removal</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li>Wash Packages & Pricing</li>
            <li>Car Care Blog</li>
            <li>FAQs</li>
            <li>Detailing Tips</li>
            <li>Customer Reviews</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Terms & Privacy</li>
            <li>Contact</li>
            <li>Our Location</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Favourite Things</h3>
          <ul>
            <li>Car Fragrance Collection</li>
            <li>Microfiber Towels</li>
            <li>Tire Shine Spray</li>
            <li>Leather Care Kit</li>
            <li>Engine Bay Cleaner</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Clean N' Shinny 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
