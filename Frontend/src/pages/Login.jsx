// ✅ File: src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === form.email && user.password === form.password) {
      if (user.role === "teacher") navigate("/teacher");
      else navigate("/student");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}