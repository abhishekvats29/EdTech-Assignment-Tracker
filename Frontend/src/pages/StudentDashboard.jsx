// ✅ File: src/pages/StudentDashboard.jsx
import React, { useState } from "react";

import AssignmentCard from "../components/AssignmentCard";

export default function StudentDashboard() {
  const [submitted, setSubmitted] = useState([]);
  const [form, setForm] = useState({ title: "", comment: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted([...submitted, form]);
    setForm({ title: "", comment: "" });
  };

  return (
    <div>
      
      <div className="dashboard">
        <h2>Student Dashboard</h2>
        <form onSubmit={handleSubmit} className="form-inline">
          <input type="text" name="title" placeholder="Assignment Title" value={form.title} onChange={handleChange} required />
          <textarea name="comment" placeholder="Your Comment" value={form.comment} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
        <div className="assignment-list">
          {submitted.map((s, idx) => (
            <AssignmentCard key={idx} title={s.title} description={s.comment} />
          ))}
        </div>
      </div>
    </div>
  );
}