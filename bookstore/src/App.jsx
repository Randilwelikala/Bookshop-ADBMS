 import React from 'react'
 import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from './Components/Navbar/Navbar'
 import LoginForm from './Components/LoginForm/LoginForm'
 import SignInForm from './Components/SignInForm/SignInForm';
 import Cart from './Components/Cart/Cart';
 const App = () => {
   return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignInForm />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
   )
 }
 
 export default App
 