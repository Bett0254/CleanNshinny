import React from "react";

export default function ServicesSection() {
  const services = [
    { img: "C pic 1.jpg", title: "Curbside Express", desc: "Basic In&Out Wash" },
    { img: "C Pic_3.jpg", title: "Curbside Special", desc: "Partial Details" },
    { img: "C pic_2.jpg", title: "Curbside Premium", desc: "Complete Details" },
    { img: "C pic 4.jpg", title: "All Services & Deals", desc: "All Offered Services & Deals" },
  ];

  return (
    <section className="in-store-section">
      <div className="in-store-heading">
        <h2>Services we provide</h2>
        <p>
          Whether you need full detail or just a basic in&out wash, we got you covered! Choose
          one of our services that best suits your need to schedule your mobile service
          appointment today.
        </p>
        <a href="#" className="check-all">Check All →</a>
      </div>

      <div className="category-grid">
        {services.map((s, i) => (
          <div className="category-item" key={i}>
            <img src={`public/Images/${s.img}`} alt={s.title} />
            <p><strong>{s.title}</strong></p>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
