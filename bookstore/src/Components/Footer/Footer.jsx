import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Receive The Latest Offers & Updates Via Email</h2>
        <p>Signup To Be The First To Hear About Exclusive Deals, Special Offers And Upcoming Collections</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>School List</li>
            <li>Sarasavi Publications</li>
            <li>Sumitha Publications</li>
            <li>Children</li>
            <li>Galle Literary</li>
            <li>Gift Packs</li>
            <li>By Language</li>
            <li>Promotions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Awards</li>
            <li>Branch Network</li>
            <li>Contact Us</li>
            <li>Sign Up/ Login</li>
            <li>My Account</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>Shipping & Return Policy</li>
            <li>Privacy And Cookies Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Policy</li>
            <li>Coupon T&C</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Details</h4>
          <p><FaMapMarkerAlt /> abc company</p>
          <p><FaPhone /> 0122773363</p>
          <p><FaEnvelope /> abc@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
