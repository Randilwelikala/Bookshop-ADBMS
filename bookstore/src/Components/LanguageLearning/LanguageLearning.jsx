import React from "react";
import "./LanguageLearning.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import L1 from "../../assets/img/L1.jpg";
import L2 from "../../assets/img/L2.jpg";
import L3 from "../../assets/img/L3.jpg";
import L4 from "../../assets/img/L4.jpg";
import L5 from "../../assets/img/L5.jpg";
import L6 from "../../assets/img/L6.jpg";
import L7 from "../../assets/img/L7.jpg";

const LanguageLearning = () => {
  const books = [
    {
      title: "EXPERT LANGUAGE LEARNING",
      oldPrice: "LKR 1500.00",
      newPrice: "LKR 1210.00",
      image: L1,
    },
    {
      title: "LEARNING LANGUAGE",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: L2,
    },
    {
      title: "FLUENT FOREVER",
      oldPrice: "LKR2140.00",
      newPrice: "LKR1926.00",
      image: L3,
    },
    {
      title: "FOREIGN LANGUAGE LEARNING",
      oldPrice: "LKR 2500.00",
      newPrice: "LKR 1400.00",
      image: L4,
    },
    {
      title: "DISCOURSE ANALYSIS",
      oldPrice: "LKR 2000.00",
      newPrice: "LKR 1400.00",
      image: L5,
    },
    {
      title: "LEARN KOREAN",
      oldPrice: "LKR 2040.00",
      newPrice: "LKR 1876.00",
      image: L6,
    },
    {
      title: "ENGLISH LEARN FOR BEGINERS",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: L7,
    },
  ];

  return (
    <div id="languagelearnng">
      <h1 className="title">Language Learning Books</h1>
      <div className="LanguageLearning-container">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="discount-tag">
              NEW <span>10%</span>
            </div>
            <div className="book-image-container">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="hover-icons">
                <button className="icon-btn">
                  <FaHeart />
                </button>
                <button className="icon-btn">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
            <div className="book-info">
              <h4>{book.title}</h4>
              <p className="old-price">{book.oldPrice}</p>
              <p className="new-price">{book.newPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageLearning;
