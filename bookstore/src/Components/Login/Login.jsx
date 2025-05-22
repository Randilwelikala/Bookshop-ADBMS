import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-container">
      {/* Login Section */}
      <div className="auth-left">
        <h2>Login</h2>
        <form>
          <label>Email Address *</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password *</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button className="auth-btn">LOGIN</button>
        </form>
      </div>

      {/* Register Section */}
      <div className="auth-right">
        <h2>Register</h2>
        <form>
          <label>Full name *</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email *</label>
          <small style={{ marginBottom: "10px", display: "block" }}>
            NOTE: Please provide a valid email to receive order updates via email
          </small>
          <input type="email" placeholder="Enter your email" required />

          <label>Password *</label>
          <input type="password" placeholder="Create a password" required />

          <button className="auth-btn">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Login;