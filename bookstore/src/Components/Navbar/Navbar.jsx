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
        <li><Link to="/">Home</Link></li>

        <li className="dropdown" ref={dropdownRef}>
          <Link
            to="/category"
            className="dropbtn"
            onClick={(e) => {
              e.preventDefault(); // Prevents navigation
              toggleDropdown();
            }}
          >
            Categories ▾
          </Link>

          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/category/fiction">Fiction</Link></li>
              <li><Link to="/category/non-fiction">Non-fiction</Link></li>
              <li><Link to="/category/academic">Academic</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/bestsellers">Best Sellers</Link></li>
        <li><Link to="/new">New Arrivals</Link></li>
      </ul>

      <div className="right-icons">
        <Link to="/cart"><FaShoppingBag className="icon" /></Link>
        <Link to="/login"><FaUserCircle className="icon" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
