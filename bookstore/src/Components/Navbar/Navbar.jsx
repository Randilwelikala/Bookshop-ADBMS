import './Navbar.css';
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        📚 BookStore
      </div>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Books</a>
      </div>

      <div className="navbar-icons">
        <button>
          <FaShoppingCart />
        </button>
        <button>
          <FaUser />
        </button>
      </div>
    </nav>
  );
}
