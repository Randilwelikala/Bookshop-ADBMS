import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LoginForm from './Components/LoginForm/LoginForm';
import SignInForm from './Components/SignInForm/SignInForm';
import Cart from './Components/Cart/Cart';
import Category from './Components/Category/Category';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} /> {/* Add your Home component */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignInForm />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Optional: dynamic routes for category sub-types */}
        <Route path="/category/:type" element={<Category />} />
      </Routes>
    </Router>
  );
};

export default App;
