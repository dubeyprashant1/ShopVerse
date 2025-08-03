import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginIllustration from "../assets/login.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-illustration">
        <img src={loginIllustration} alt="Login Illustration" />
      </div>
      <div className="login-form-container">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <form>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="redirect-text">
          Don't have an account?{" "}
          <span className="redirect-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
