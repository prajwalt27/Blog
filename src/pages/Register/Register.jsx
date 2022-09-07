import React from "react";
import "./register.css";

export default function Login() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
      <label> Username</label>
        <input className="registerInput" type="text" placeholder="Enter username" />
        <label> Email</label>
        <input className="registerInput" type="email" placeholder="Enter email" />
        <label> Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter password"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
