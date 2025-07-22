// ✅ File: src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    if (form.role === "teacher") navigate("/teacher");
    else navigate("/student");
  };

  return (
    <div>
      
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}