import React from "react";
import "./Novel.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import N1 from "../../assets/img/N1.jpg";
import N2 from "../../assets/img/N2.jpg";
import N3 from "../../assets/img/N3.jpg";
import N4 from "../../assets/img/N4.jpg";
import N5 from "../../assets/img/N5.jpg";
import N6 from "../../assets/img/N6.jpg";
import N7 from "../../assets/img/N7.jpg";
import N8 from "../../assets/img/N8.jpg";
import N9 from "../../assets/img/N9.jpg";
import N10 from "../../assets/img/N10.jpg";
import N11 from "../../assets/img/N11.jpg";
import N12 from "../../assets/img/N12.jpg";
import N13 from "../../assets/img/N13.jpg";
import N14 from "../../assets/img/N14.jpg";

const Novel = () => {
  const books = [
    {
      title: "To Kill a Mockingbird",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: N1,
    },
    {
      title: "Pride and Prejudice",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N2,
    },
    {
      title: "The Great Gatsby",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N3,
    },
    {
      title: "Jane Eyre",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N4,
    },
    {
      title: "1984",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: N5,
    },
    {
      title: "The Catcher in the Rye",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N6,
    },
    {
      title: "Wuthering Heights",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: N7,
    },
    {
      title: "Little Women",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N8,
    },
    {
      title: "The Book Thief",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N9,
    },
    {
      title: "The Kite Runner",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: N10,
    },
    {
      title: "The Alchemist",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: N11,
    },
    {
      title: "The Night Circus",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N12,
    },
    {
      title: "Where the Crawdads Sing",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: N13,
    },
    {
      title: "It Ends With Us",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: N14,
    },
  ];

  return (
    <div id="novel">
      <h1 className="title">Novels</h1>
      <div className="children-container">
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

export default Novel;
