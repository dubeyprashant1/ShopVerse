import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profileImage from "../assets/profile.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-brand">ShopVerse</div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="/login" onClick={() => setIsOpen(false)}>Shop</a>
        <a href="/signup" onClick={() => setIsOpen(false)}>SignUp</a>
        <img src={profileImage} alt="profile" />
      </nav>
    </header>
  );
};

export default Navbar;
