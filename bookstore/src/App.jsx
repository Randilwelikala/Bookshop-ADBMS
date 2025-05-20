import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
