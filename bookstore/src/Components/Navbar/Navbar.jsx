import React from "react";
import "./Navbar.css";
import { FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <span>
          Call us for Web Orders: <a href="tel:+9470000000">+94 70000000 / 0112666666</a>
        </span>
        <span>
          Email: <a href="">abc@gmail.com</a>
        </span>
        <div className="top-links">
          <a href="#">Advanced Search</a>
          <Link to="/login">Sign Up / Login</Link>
          <a href="#">LKR</a>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <div>
            <h1>BOOKLY</h1>
            <p>THE BOOKSHOP</p>
          </div>
        </div>

        <div className="nav-search">
          <FaHome className="home-icon" />
          <input type="text" placeholder="Search" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="nav-icons">
          <div className="icon-container">
            <FaHeart />
            <span className="icon-count">0</span>
          </div>
          <div className="icon-container">
            <FaShoppingCart />
            <span className="icon-count">0</span>
          </div>
        </div>
      </nav>

      <div className="menu-bar">
        <NavLink to="/school" className="navlink">SCHOOL LIST</NavLink>
        <NavLink to="/sarasavi" className="navlink">FICTIONAL</NavLink>
        <NavLink to="/sumitha" className="navlink">NON-FICTIONAL</NavLink>
        <NavLink to="/children" className="navlink">CHILDREN</NavLink>
        <NavLink to="/international" className="navlink">INTERNATIONAL SCHOOL BOOKS</NavLink>
        <NavLink to="/request" className="navlink">NOVELS</NavLink>
        <NavLink to="/ebooks" className="navlink">SHORT STORY</NavLink>
        <NavLink to="/branches" className="navlink">LANGUAGE LEARNING
</NavLink>
      </div>
    </>
  );
};

export default Navbar;
