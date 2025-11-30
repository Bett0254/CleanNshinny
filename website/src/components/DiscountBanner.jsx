import React from "react";

export default function DiscountBanner() {
  return (
    <section className="discount-banner">
      <div className="banner-overlay">
        <h2>Join our family & Get Discount</h2>
        <p>Join our mailing list</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Your email address" />
          <button className="shop-btn">Sign Up</button>
        </div>
      </div>
    </section>
  );
}
