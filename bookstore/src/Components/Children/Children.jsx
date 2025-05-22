import React from "react";
import "./Children.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";

import cb1 from "../../assets/img/cb1.jpg";
import cb2 from "../../assets/img/cb2.jpg";
// ... import rest of the images


const Children = () => {
  const books = [
    {
      title: "PRINCESS OLIVIA INVESTIGATES - THE",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: cb1,
    },
    {
      title: "ROCK STAR DETECTIVES -",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb2,
    },
    // ... more books
  ];

  const addToCart = async (book) => {
    const price = parseFloat(book.newPrice.replace("LKR", "").replace(",", "").trim());
    try {
      await axios.post("http://localhost:5000/cart", {
  title: book.title,
  price,
  quantity: 1,
  // image: book.image, // Add this line
});

      alert("Added to cart!");
    } catch (error) {
      alert("Error adding to cart");
    }
  };

  return (
    <div id="children">
      <h1 className="title">Children's Books</h1>
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


export default Children;