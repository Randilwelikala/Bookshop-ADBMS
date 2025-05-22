import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";


const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/cart/count");
        setCartCount(res.data.total || 0);
      } catch (err) {
        console.error("Failed to fetch cart count", err);
      }
    };

    fetchCartCount();
    const intervalId = setInterval(fetchCartCount, 1000); // every 5 seconds

  return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <>
      <div className="top-bar">
        <span>
          Call us for Web Orders:{" "}
          <a href="tel:+9470000000">+94 70000000 / 0112666666</a>
        </span>
        <span>
          Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
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
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="nav-icons">
          <div className="icon-container">
            <FaHeart />
            <span className="icon-count">0</span>
          </div>
          <div className="icon-container">
            <Link to={"/cart"}>
              <FaShoppingCart />
              <span className="icon-count">{cartCount}</span>
            </Link>
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
