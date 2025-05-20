import React from "react";
import "./Fiction.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import F1 from "../../assets/img/F1.jpg";
import F2 from "../../assets/img/F2.jpg";
import F3 from "../../assets/img/F3.jpg";
import F4 from "../../assets/img/F4.jpg";
import F5 from "../../assets/img/F5.jpg";
import F6 from "../../assets/img/F6.jpg";
import F7 from "../../assets/img/F7.jpg";
import F8 from "../../assets/img/F8.jpg";
import F9 from "../../assets/img/F9.jpg";
import F10 from "../../assets/img/F10.jpg";
import F11 from "../../assets/img/F11.jpg";
import F12 from "../../assets/img/F12.jpg";
import F13 from "../../assets/img/F13.jpg";
import F14 from "../../assets/img/F14.jpg";

const Fiction = () => {
  const books = [
    {
      title: "Fiction - PRINCESS OLIVIA INVESTIGATES - THE",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: F1,
    },
    {
      title: "Fiction - ROCK STAR DETECTIVES",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1890.00",
      image: F2,
    },
    {
      title: "Fiction - THE DETENTION DETECTIVES",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: F3,
    },
    {
      title: "Fiction - LENORA BOLT ECO ENGINEER",
      oldPrice: "LKR 2000.00",
      newPrice: "LKR 1800.00",
      image: F4,
    },
    {
      title: "Fiction - LENORA BOLT DEEP SEA CALAMITY",
      oldPrice: "LKR 1850.00",
      newPrice: "LKR 1650.00",
      image: F5,
    },
    {
      title: "Fiction - PRINCESS OLIVIA INVESTIGATES - THE SEA OF",
      oldPrice: "LKR 2200.00",
      newPrice: "LKR 1980.00",
      image: F6,
    },
    {
      title: "Fiction - PRINCESS OLIVIA INVESTIGATES - THE CASE OF MISSING CAT",
      oldPrice: "LKR 2000.00",
      newPrice: "LKR 1800.00",
      image: F7,
    },
    {
      title: "Fiction - THE DETENTION DETECTIVES: MYSTERY RETURNS",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: F8,
    },
    {
      title: "Fiction - PONY",
      oldPrice: "LKR 2100.00",
      newPrice: "LKR 1890.00",
      image: F9,
    },
    {
      title: "Fiction - LENORA BOLT SECRET INVENTOR",
      oldPrice: "LKR 1950.00",
      newPrice: "LKR 1750.00",
      image: F10,
    },
    {
      title: "Fiction - TRAIXIE PICKLE ART AVENGER TOXIC TAKEDOWN",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: F11,
    },
    {
      title: "Fiction - BLUE-HOORAY EASTER",
      oldPrice: "LKR 2000.00",
      newPrice: "LKR 1800.00",
      image: F12,
    },
    {
      title: "Fiction - BEAR AND BIRD",
      oldPrice: "LKR 2100.00",
      newPrice: "LKR 1890.00",
      image: F13,
    },
    {
      title: "Fiction - ROLLER GIRL",
      oldPrice: "LKR 2200.00",
      newPrice: "LKR 1980.00",
      image: F14,
    },
  ];

  return (
    <div id="fiction">
      <h1 className="title">Fictional Books</h1>
      <div className="fiction-container">
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

export default Fiction;
