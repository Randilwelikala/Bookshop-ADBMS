import React from "react";
import "./Children.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import cb1 from "../../assets/img/cb1.jpg";
import cb2 from "../../assets/img/cb2.jpg";
import cb3 from "../../assets/img/cb3.jpg";
import cb4 from "../../assets/img/cb4.jpg";
import cb5 from "../../assets/img/cb5.jpg";
import cb6 from "../../assets/img/cb6.jpg";
import cb7 from "../../assets/img/cb7.jpg";
import cb8 from "../../assets/img/cb8.jpg";
import cb9 from "../../assets/img/cb9.jpg";
import cb10 from "../../assets/img/cb10.jpg";

import cb11 from "../../assets/img/cb11.jpg";
import cb12 from "../../assets/img/cb12.jpg";
import cb13 from "../../assets/img/cb13.jpg";
import cb14 from "../../assets/img/cb14.jpg";
 

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
    {
      title: "THE DETENTION DETECTIVES",
      oldPrice: "LKR2140.00",
      newPrice: "LKR1926.00",
      image: cb3,
    },
    {
      title: "LENORA BOLT ECO ENGINEER",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb4,
    },
    {
      title: "LENORA BOLT DEEP SEA CALAMITY",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: cb5,
    },
    {
      title: "PRINCESS OLIVIA INVESTIGATES-THE SEA OF",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb6,
    },
    {
      title: "PRINCESS OLIVIA INVESTIGATES - THE",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: cb7,
    },
    {
      title: "THE DETENTION DETECTIVES",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb8,
    },
    {
      title: "PONY",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb9,
    },
    {
      title: "LENORA BOLT SECRET INVENTOR",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1.00710",
      image: cb11,
    },
    {
      title: "TRAIXIE PICKLE ART AVENGER TOXIC TAKEDOWN",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: cb10,
    },
    {
      title: "BLUE-HOORAY EASTER",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb9,
    },
    {
      title: "BEAR AND BIRD",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: cb12,
    },
    {
      title: "ROLLER GIRL",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb13,
    },
    // Add more books below in the same format to match the UI shown
  ];

  return (
    <div className="children-container">
      {books.map((book, index) => (
        <div className="book-card" key={index}>
          <div className="discount-tag">NEW <span>10%</span></div>
          <div className="book-image-container">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="hover-icons">
              <button className="icon-btn"><FaHeart /></button>
              <button className="icon-btn"><FaShoppingCart /></button>
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
  );
};

export default Children;
