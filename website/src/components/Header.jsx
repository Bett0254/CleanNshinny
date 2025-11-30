import React from "react";
import "./style.css";
import "./app.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <a href="/">
          <img src="public/Icons/My logo.png" alt="CleanNshinny" className="logo-img" />
        </a>
      </div>
      <nav className="main-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
