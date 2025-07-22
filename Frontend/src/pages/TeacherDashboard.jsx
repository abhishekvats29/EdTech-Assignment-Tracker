// File: src/pages/TeacherDashboard.jsx
import React, { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";

export default function TeacherDashboard() {
  const [assignments, setAssignments] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    setAssignments([...assignments, form]);
    setForm({ title: "", description: "" });
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">📚 Teacher Dashboard</h2>

      <form onSubmit={handleCreate} className="assignment-form">
        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Assignment Description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Create Assignment</button>
      </form>

      <div className="assignment-list">
        {assignments.map((assignment, idx) => (
          <AssignmentCard key={idx} assignment={assignment} />
        ))}
      </div>

      {/* Internal CSS styling */}
      <style>{`
        .dashboard-container {
          max-width: 800px;
          margin: 30px auto;
          padding: 20px;
          border-radius: 8px;
          background-color: #fefefe;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        .dashboard-title {
          text-align: center;
          font-size: 28px;
          color: #333;
          margin-bottom: 20px;
        }

        .assignment-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
        }

        .assignment-form input,
        .assignment-form textarea {
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .assignment-form button {
          padding: 10px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .assignment-form button:hover {
          background-color: #0056b3;
        }

        .assignment-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
        }
      `}</style>
    </div>
  );
}
