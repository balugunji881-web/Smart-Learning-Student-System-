import { useParams } from "react-router-dom";
import { useState } from "react";

function EditAssignment() {

  const { id } = useParams();

  const [assignment, setAssignment] =
    useState({
      title: "React Authentication",
      description:
        "Build Login and Registration System",
      dueDate: "2026-06-15",
      totalMarks: 100
    });

  const handleChange = (e) => {
    setAssignment({
      ...assignment,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Assignment Updated Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>
        Edit Assignment #{id}
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={assignment.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={assignment.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          value={assignment.dueDate}
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalMarks"
          value={assignment.totalMarks}
          onChange={handleChange}
        />

        <button type="submit">
          Update Assignment
        </button>

      </form>

    </div>
  );
}

export default EditAssignment;