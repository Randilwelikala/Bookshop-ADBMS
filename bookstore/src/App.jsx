import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Children from "./Components/Children/Children";
import LanguageLearning from "./Components/LanguageLearning/LanguageLearning";
import Home from "./Components/Home/Home";
import Fiction from "./Components/Fiction/Fiction";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/children" element={<Children />} />
        <Route path="/languagelearning" element={<LanguageLearning />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
