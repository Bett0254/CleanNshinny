import React from "react";

export default function AllProducts() {
  const products = [
    { img: "exterior washing.jpg", name: "Exterior Wash", price: "$7.00", old: "$9.00" },
    { img: "interior vacuuming.jpg", name: "Interior vacuuming", price: "$7.00", old: "$10.00" },
    { img: "engine cleaning.jpg", name: "Engine cleaning", price: "$15.00", old: "$18.00" },
    { img: "waxing.jpg", name: "Waxing", price: "$10.00", old: "$15.00" },
    { img: "interior detailing.jpg", name: "Interior Detailing", price: "$20.00", old: "$25.00" },
    { img: "tire shine.jpg", name: "Tire Shine", price: "$5.00", old: "$8.00" },
    { img: "baffing.jpg", name: "Buffing", price: "$15.00", old: "$18.00" },
    { img: "tinting.jpeg", name: "Window Tinting", price: "$5.00", old: "$8.00" },
  ];

  return (
    <section className="all-product-section">
      <h2 className="section-title">All Services</h2>
      <p className="section-subtitle">
        Various services you can get from washing your Car in Clean N' Shinny
      </p>

      <div className="product-grid">
        {products.map((p, i) => (
          <div className="product-item" key={i}>
            <img src={`public/Images/${p.img}`} alt={p.name} />
            <p className="product-name">{p.name}</p>
            <p className="product-price">
              {p.price} <span>{p.old}</span>
            </p>
            <button className="add-to-cart-btn-small">+</button>
          </div>
        ))}
      </div>
    </section>
  );
}
