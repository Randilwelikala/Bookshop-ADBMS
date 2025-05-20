import React from "react";
import "./Short.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import S1 from "../../assets/img/S1.jpg";
import S2 from "../../assets/img/S2.jpg";
import S3 from "../../assets/img/S3.jpg";
import S4 from "../../assets/img/S4.jpg";
import S5 from "../../assets/img/S5.jpg";
import S6 from "../../assets/img/S6.jpg";
import S7 from "../../assets/img/S7.jpg";

const Short = () => {
  const books = [
    {
      title: "Interpreter of Maladies",
      oldPrice: "LKR 2500.00",
      newPrice: "LKR 2100.00",
      image: S1,
    },
    {
      title: "Dubliners",
      oldPrice: "LKR 2300.00",
      newPrice: "LKR 1950.00",
      image: S2,
    },
    {
      title: "Tenth of December",
      oldPrice: "LKR 2800.00",
      newPrice: "LKR 2520.00",
      image: S3,
    },
    {
      title: "Everything Inside",
      oldPrice: "LKR 2200.00",
      newPrice: "LKR 1980.00",
      image: S4,
    },
    {
      title: "The Thing Around Your Neck",
      oldPrice: "LKR 2400.00",
      newPrice: "LKR 2160.00",
      image: S5,
    },
    {
      title: "Men Without Women",
      oldPrice: "LKR 2600.00",
      newPrice: "LKR 2340.00",
      image: S6,
    },
    {
      title: "Her Body and Other Parties",
      oldPrice: "LKR 2750.00",
      newPrice: "LKR 2475.00",
      image: S7,
    },
  ];

  return (
    <div id="short">
      <h1 className="title">Short Stories</h1>
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

export default Short;
