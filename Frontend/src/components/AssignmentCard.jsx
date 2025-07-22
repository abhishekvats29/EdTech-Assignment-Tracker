// File: src/components/AssignmentCard.jsx
import React from "react";

export default function AssignmentCard({ assignment }) {
  if (!assignment) return null;

  return (
    <div className="card">
      <h3>{assignment.title}</h3>
      <p>{assignment.description}</p>

      <style>{`
        .card {
          background-color: #ffffff;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: transform 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card h3 {
          margin: 0 0 10px;
          color: #333;
          font-size: 20px;
        }

        .card p {
          margin: 0;
          color: #666;
          font-size: 15px;
        }
      `}</style>
    </div>
  );
}
