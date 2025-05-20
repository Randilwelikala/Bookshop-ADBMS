import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import home2 from "../../assets/img/home2.jpg";
import home3 from "../../assets/img/home3.jpg";
import home4 from "../../assets/img/home4.jpg";
import home5 from "../../assets/img/home5.jpg";
import home6 from "../../assets/img/home6.jpg";
import home8 from "../../assets/img/home8.jpg";
import h1 from "../../assets/img/h1.png";
import h2 from "../../assets/img/h2.png";
import cb2 from "../../assets/img/cb2.jpg";
import F3 from "../../assets/img/F3.jpg";
import E2 from "../../assets/img/E2.jpg";
import S2 from "../../assets/img/S2.jpg";
import L5 from "../../assets/img/L5.jpg";
import F11 from "../../assets/img/F11.jpg";
import F4 from "../../assets/img/F4.jpg";
import cb12 from "../../assets/img/cb12.jpg";
import F1 from "../../assets/img/F1.jpg";
import E8 from "../../assets/img/E8.jpg";
import S4 from "../../assets/img/S4.jpg";
import L6 from "../../assets/img/L6.jpg";

const Home = () => {
  const books1 = [
    {
      title: "Fiction - LENORA BOLT ECO ENGINEER",
      oldPrice: "LKR 2000.00",
      newPrice: "LKR 1800.00",
      image: F4,
    },
    {
      title: "BEAR AND BIRD",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: cb12,
    },
    {
      title: "Fiction - PRINCESS OLIVIA INVESTIGATES - THE",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: F1,
    },
    {
      title: "How to Read a Book – Adler & Van Doren",
      oldPrice: "LKR 2800.00",
      newPrice: "LKR 2520.00",
      image: E8,
    },
    {
      title: "Everything Inside",
      oldPrice: "LKR 2200.00",
      newPrice: "LKR 1980.00",
      image: S4,
    },
    {
      title: "LEARN KOREAN",
      oldPrice: "LKR 2040.00",
      newPrice: "LKR 1876.00",
      image: L6,
    },
  ];

  const books2 = [
    {
      title: "Fiction - TRAIXIE PICKLE ART AVENGER TOXIC TAKEDOWN",
      oldPrice: "LKR 1900.00",
      newPrice: "LKR 1710.00",
      image: F11,
    },
    {
      title: "ROCK STAR DETECTIVES -",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: cb2,
    },
    {
      title: "Fiction - THE DETENTION DETECTIVES",
      oldPrice: "LKR 2140.00",
      newPrice: "LKR 1926.00",
      image: F3,
    },
    {
      title: "A Short History of Nearly Everything – Bill Bryson",
      oldPrice: "LKR 3400.00",
      newPrice: "LKR 3060.00",
      image: E2,
    },
    {
      title: "Dubliners",
      oldPrice: "LKR 2300.00",
      newPrice: "LKR 1950.00",
      image: S2,
    },
    {
      title: "DISCOURSE ANALYSIS",
      oldPrice: "LKR 2000.00",
      newPrice: "LKR 1400.00",
      image: L5,
    },
  ];

  return (
    <div className="home" id="home">
      {/*home section one*/}
      <div className="h-sec1">
        <div className="h-sec1-txt">
          <h1>
            Buy <span>your</span> <br /> Favorite <span>book</span> <br />
            from <span>here</span>
          </h1>
        </div>
        <div className="h-sec1-imge">
          <img src={h2} alt="" />
        </div>
      </div>

      {/*home section two*/}
      <div className="h-sec2">
        <h1>Book Categories</h1>
        <div className="h-sec2-imge">
          <div className="h-sec2-imges">
            <Link to={"/education"}>
              <img src={home6} alt="" />
            </Link>
            <h3>
              Educational <br />
            </h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/short"}>
              <img src={home5} alt="" />
            </Link>
            <h3>Short Story</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/children"}>
              <img src={home2} alt="" />
            </Link>
            <h3>Children</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/fiction"}>
              <img src={home4} alt="" />
            </Link>
            <h3>Fiction</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/novel"}>
              <img src={home3} alt="" />
            </Link>
            <h3>Novel</h3>
          </div>
          <div className="h-sec2-imges">
            <Link to={"/languagelearning"}>
              <img src={home8} alt="" />
            </Link>
            <h3>Languages</h3>
          </div>
        </div>
      </div>

      {/*home section three*/}
      <div className="h-sec3">
        <h1 className="title">Popular</h1>
        <div className="Home-container">
          {books1.map((book, index) => (
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

      {/*home section four*/}
      <div className="home-sec4">
        <div className="h-sec4-imge">
          <img src={h1} alt="" />
        </div>
        <div className="h-sec4-txt">
          <h4>Stay with us</h4>
          <p>
            Stay with us and be part of a growing community that celebrates the
            joy of reading. From new arrivals to timeless classics, we’re here
            to keep your shelves stocked and your mind inspired. Let every page
            turn into a new adventure with us by your side.
          </p>
        </div>
      </div>

      {/*home section five*/}
      <div className="h-sec5">
        <h1 className="title">New Arrival</h1>
        <div className="Home-container">
          {books2.map((book, index) => (
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
    </div>
  );
};

export default Home;
