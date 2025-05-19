import React from "react";
import "./Category.css";
import br from "../../assets/img/br.jpg";

const books = [
  { title: "Read Freely", price: "$49.00", image: br, author: "Sylvia Browne" },
  { title: "Africanos Greatness", price: "$31.00", image: br, author: "Jay Jay Okocha" },
  { title: "Embrace The Wild", price: "$42.00", image: br, author: "John Mccain" },
  { title: "Galaxy Diary Here", price: "$40.00", image: br, author: "Sophia Palmer" },
  { title: "Caribbean World", price: "$30.50", image: br, author: "Travel Agency" },
  { title: "Read Many Books", price: "$29.00", image: br, author: "Unknown Author" },
  { title: "World Book Day", price: "$32.00", image: br, author: "Online Sale" },
  { title: "Imagination Of Today", price: "$32.00", image: br, author: "BookLand Co." },
  { title: "Future Visions", price: "$33.00", image: br, author: "Horizon Inc." },
  { title: "Ocean Tales", price: "$28.00", image: br, author: "Waves & Words" },
  { title: "Digital Dawn", price: "$36.00", image: br, author: "Tech Reads" },
  { title: "Mystery of Ages", price: "$39.00", image: br, author: "Ancient Lore" },
  { title: "Hidden Worlds", price: "$34.00", image: br, author: "Explore More" },
  { title: "Into the Unknown", price: "$38.00", image: br, author: "Adventurous" },
  { title: "Pages of Time", price: "$27.00", image: br, author: "Timeless Reads" },
  { title: "Bright Minds", price: "$29.50", image: br, author: "Edu Spark" },
  { title: "The Golden Path", price: "$41.00", image: br, author: "Legacy Books" },
  { title: "Infinite Space", price: "$35.00", image: br, author: "Galaxy Press" },
  { title: "Dream Catcher", price: "$37.00", image: br, author: "Dream House" },
  { title: "City of Words", price: "$30.00", image: br, author: "Urban Reads" },
];

const Category = () => {
  return (
    <div className="category-page">
      <div className="book-grid">
        {books.map((book, index) => (
          <div
            
          >
            <img src={book.image} alt={book.title} className="book-image" />
            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="price">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
