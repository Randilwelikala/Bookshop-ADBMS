import React, { useState } from 'react';
import './Cart.css';
import { FaTrash } from 'react-icons/fa';
import br from '../../assets/img/br.jpg';
 

const initialCartItems = [
  {
    id: 1,
    name: 'The Witch',
    auther: 'Enid Blyton',
    year: '1989',
    price: 37,
    quantity: 1,
    
    image: br
  },
  {
    id: 2,
    name: 'The Witch',
    auther: 'Enid Blyton',
    year: '1989',
    price: 133,
    quantity: 2,
    
    image: br
  },
  {
    id: 3,
    name: 'The Witch',
    auther: 'Enid Blyton',
    year: '1989',
    price: 77,
    quantity: 2,
    
    image: br
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>BOOK DETAILS</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
             
            <th>SUBTOTAL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td className="product-details">
                <img src={item.image} alt={item.name} />
                <div>
                  <div className="product-name">{item.name}</div>
                  <div className="product-meta">Auther : {item.auther}</div>
                  <div className="product-meta">Year : {item.year}</div>
                </div>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </td>
              
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td><FaTrash className="delete-icon" onClick={() => deleteItem(item.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary">
        <div className="summary-row">
          <span>Sub Total</span> 
          <span>${total.toFixed(2)}</span>
        </div>
       
      </div>
      <br /><br />
      <div className="checkoutbtn">
        <button className="checkout-btn">Log in to Checkout</button>
      </div>
      
    </div>
  );
};

export default Cart;
