import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingBag, FaUserCircle, FaBookOpen, FaLightbulb, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  return (
    <nav className="navbar">
      <div className="logo">BookNest</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>

        <li className="dropdown">
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
            <ul className="dropdown-content" onClick={() => setDropdownOpen(false)}>
              <li>
                <a href="#">
                  
                  Fiction
                </a>
              </li>
              <li>
                <a href="#">
                   
                  Non-fiction
                </a>
              </li>
              <li>
                <a href="#">
                   
                  Academic
                </a>
              </li>
            </ul>
          )}
        </li>

        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">New Arrivals</a></li>
      </ul>

      <div className="right-icons">
        <input type="text" placeholder="Search books..." />
        <a href="#"><FaShoppingBag className="icon" /></a>
        <a href="#"><FaUserCircle className="icon" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
