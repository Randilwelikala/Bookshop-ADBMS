import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios.get("http://localhost:5000/cart")
      .then(res => setCartItems(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await axios.put(`http://localhost:5000/cart/${id}`, { quantity: newQuantity });
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price (LKR)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} className="product-img" />
                  </td>
                  <td>
                    <div className="product-name">{item.title}</div>
                    <div className="product-meta">{item.author}</div>
                  </td>
                  <td>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <FaTrashAlt
                      className="delete-icon"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}

              {/* Subtotal Row */}
              <tr className="subtotal-row">
                <td colSpan="3" style={{ fontStyle: "italic", color: "#333" }}>
                  Subtotal for: {cartItems.map(item => item.title).join(", ")}
                </td>
                <td style={{ fontWeight: "bold", textAlign: "right" }}>Subtotal (LKR):</td>
                <td style={{ fontWeight: "bold" }}>{getTotal()}</td>
              </tr>
            </tbody>
          </table>

          <div className="summary">
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
