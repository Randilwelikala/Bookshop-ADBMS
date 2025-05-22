import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Children from "./Components/Children/Children";
import LanguageLearning from "./Components/LanguageLearning/LanguageLearning";
import Home from "./Components/Home/Home";
import Fiction from "./Components/Fiction/Fiction";
import Short from "./Components/Short/Short";
import Novel from "./Components/Novel/Novel";
import Education from "./Components/Education/Education";
import Analysis from "./Components/Analysis/Analysis";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Link to="/analysis">
        <button style={{ marginLeft: "15px", padding: "6px 12px", cursor: "pointer" }}>
          View Analysis
        </button>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page as default */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/children" element={<Children />} />
        <Route path="/short" element={<Short />} />
        <Route path="/novel" element={<Novel />} />
        <Route path="/education" element={<Education />} />
        <Route path="/languagelearning" element={<LanguageLearning />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
