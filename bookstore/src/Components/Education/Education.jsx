import React from "react";
import "./Education.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";

import E1 from "../../assets/img/E1.png";
import E2 from "../../assets/img/E2.jpg";
import E3 from "../../assets/img/E3.jpg";
import E4 from "../../assets/img/E4.jpg";
import E5 from "../../assets/img/E5.jpg";
import E6 from "../../assets/img/E6.jpg";
import E7 from "../../assets/img/E7.jpg";
import E8 from "../../assets/img/E8.jpg";
import E9 from "../../assets/img/E9.jpg";
import E10 from "../../assets/img/E10.jpg";
import E11 from "../../assets/img/E11.jpg";
import E12 from "../../assets/img/E12.jpg";
import E13 from "../../assets/img/E13.jpg";
import E14 from "../../assets/img/E14.jpg";

const Educational = () => {
  const books = [
    {
      title: "Sapiens: A Brief History of Humankind – Yuval Noah Harari",
      oldPrice: "LKR 3500.00",
      newPrice: "LKR 3150.00",
      image: E1,
    },
    {
      title: "A Short History of Nearly Everything – Bill Bryson",
      oldPrice: "LKR 3400.00",
      newPrice: "LKR 3060.00",
      image: E2,
    },
    {
      title: "Atomic Habits – James Clear",
      oldPrice: "LKR 3200.00",
      newPrice: "LKR 2880.00",
      image: E3,
    },
    {
      title: "Outliers: The Story of Success – Malcolm Gladwell",
      oldPrice: "LKR 3300.00",
      newPrice: "LKR 2970.00",
      image: E4,
    },
    {
      title: "Thinking, Fast and Slow – Daniel Kahneman",
      oldPrice: "LKR 3600.00",
      newPrice: "LKR 3240.00",
      image: E5,
    },
    {
      title: "The Selfish Gene – Richard Dawkins",
      oldPrice: "LKR 3000.00",
      newPrice: "LKR 2700.00",
      image: E6,
    },
    {
      title: "The Elements of Style – Strunk & White",
      oldPrice: "LKR 1800.00",
      newPrice: "LKR 1620.00",
      image: E7,
    },
    {
      title: "How to Read a Book – Adler & Van Doren",
      oldPrice: "LKR 2800.00",
      newPrice: "LKR 2520.00",
      image: E8,
    },
    {
      title: "The Language Instinct – Steven Pinker",
      oldPrice: "LKR 3100.00",
      newPrice: "LKR 2790.00",
      image: E9,
    },
    {
      title: "The Art of Learning – Josh Waitzkin",
      oldPrice: "LKR 2900.00",
      newPrice: "LKR 2610.00",
      image: E10,
    },
    {
      title: "Educated: A Memoir – Tara Westover",
      oldPrice: "LKR 3300.00",
      newPrice: "LKR 2970.00",
      image: E11,
    },
    {
      title: "Guns, Germs, and Steel – Jared Diamond",
      oldPrice: "LKR 3500.00",
      newPrice: "LKR 3150.00",
      image: E12,
    },
    {
      title: "Factfulness – Hans Rosling",
      oldPrice: "LKR 3000.00",
      newPrice: "LKR 2700.00",
      image: E13,
    },
    {
      title: "The Feynman Lectures on Physics – Richard P. Feynman",
      oldPrice: "LKR 4000.00",
      newPrice: "LKR 3600.00",
      image: E14,
    },
  ];

  const addToCart = async (book) => {
    const price = parseFloat(book.newPrice.replace("LKR", "").replace(",", "").trim());
    try {
      await axios.post("http://localhost:5000/cart", {
        title: book.title,
        price,
        quantity: 1,
        // image: book.image, // optionally send image if needed
      });
      alert("Added to cart!");
    } catch (error) {
      alert("Error adding to cart");
      console.error(error);
    }
  };

  return (
    <div id="education">
      <h1 className="title">Educational Books</h1>
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
                <button className="icon-btn" onClick={() => addToCart(book)}>
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

export default Educational;
