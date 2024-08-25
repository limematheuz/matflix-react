import React, { useState } from "react";
import AuthService from "../../../Shared/Services/AuthService";
import "./Login.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password);
      window.location.href = "/";
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <section className="login-container">
      <form onSubmit={handleLogin} className="loginForm-container">
        <div className="login-input-container">
          <label>Username</label>
          <input
            type="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="login-input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="loginForm-errorMessage">
        {message && <p>{message}</p>}
      </div>
    </section>
  );
}
