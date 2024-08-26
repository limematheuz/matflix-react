import React, { useState } from "react";
import "./Register.css";
import AuthService from "../../../Shared/Services/AuthService";

export function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await AuthService.register(username, email, password);
      // console.log("Registration successful:", response);
      window.location.href = "/";
    } catch (error) {
      // console.error("Registration failed:", error.response || error.message);
      setMessage("Registration failed. Please check your credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="register-container">
      <form onSubmit={handleRegister} className="registerForm-container">
        <div className="register-input-container">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=""
            required
          />
        </div>
        <div className="register-input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@gmail.com"
            required
          />
        </div>
        <div className="register-input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            required
          />
        </div>
        <p>Password must have 8 characters, at least one letter, one number and one special character</p>
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <div className="registerForm-errorMessage">{message && <p>{message}</p>}</div>
    </section>
  );
}

export default Register;
