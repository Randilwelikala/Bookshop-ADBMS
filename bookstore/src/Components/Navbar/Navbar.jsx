import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">BookNest</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>

        <li className="dropdown" ref={dropdownRef}>
          <a
            href="#"
            className="dropbtn"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            Categories ▾
          </a>

          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="#">Fiction</a></li>
              <li><a href="#">Non-fiction</a></li>
              <li><a href="#">Academic</a></li>
            </ul>
          )}
        </li>

        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">New Arrivals</a></li>
      </ul>

      <div className="right-icons">
         
        <Link to="/Cart"><FaShoppingBag className="icon" /></Link>
        <Link to="/login"><FaUserCircle className="icon" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
