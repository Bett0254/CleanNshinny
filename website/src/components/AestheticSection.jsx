import React from "react";

export default function AestheticSection() {
  return (
    <section className="aesthetic-section">
      <div className="aesthetic-image">
        <img src="public/Images/first pic_1.jpg" alt="exterior car cleaning service" />
      </div>
      <div className="aesthetic-details">
        <h2>CAR WASH DONE RIGHT</h2>
        <p>
          Clean N' Shinny is locally owned and operated vehicle washing and detailing
          services located along River side area. We are a fully equipped detailing service
          provider. This means we also travel to the location of your choice with our own
          equipment, supplies, water and electricity. We cater to clients who enjoy the luxury
          of detailing services without having to sacrifice convenience. Kick back, relax and
          enjoy the comfort of your home or office while we make your vehicle look brand new
          again.
        </p>
        <ul>
          <li>100% Customer satisfaction guaranteed</li>
          <li>100% Eco-Friendly environmentally safe products utilized.</li>
        </ul>
      </div>
    </section>
  );
}
