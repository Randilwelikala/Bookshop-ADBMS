import React from "react";
import "./Navbar.css";
import { FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <span>
          Call us for Web Orders:{" "}
          <a href="tel:+9470000000">+94 70000000 / 0112666666</a>
        </span>
        <span>
          Email: <a href="">abc@gmail.com</a>
        </span>
        <div className="top-links">
           
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
          <Link to={"/home"}>
            <FaHome className="home-icon" />
          </Link>
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
        <NavLink to="/education" className="navlink">
          EDUCATIONAL
        </NavLink>
        <NavLink to="/fiction" className="navlink">
          FICTION
        </NavLink>
        <NavLink to="/children" className="navlink">
          CHILDREN
        </NavLink>
        <NavLink to="/short" className="navlink">
          SHORT STORY
        </NavLink>
        <NavLink to="/novel" className="navlink">
          NOVELS
        </NavLink>
        
        <NavLink to="/languagelearning" className="navlink">
          LANGUAGE LEARNING
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
