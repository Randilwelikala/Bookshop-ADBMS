import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Children from './Components/Children/Children';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/children" element={<Children />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
