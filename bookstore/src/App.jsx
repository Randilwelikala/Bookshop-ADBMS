 import React from 'react'
 import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Navbar from './Components/Navbar/Navbar'
 import LoginForm from './Components/LoginForm/LoginForm'
 import SignInForm from './Components/SignInForm/SignInForm';
 const App = () => {
   return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignInForm />} />
        
      </Routes>
    </Router>
   )
 }
 
 export default App
 