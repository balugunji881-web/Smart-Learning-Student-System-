import { useState } from "react";

function AddAssignment() {

  const [assignment, setAssignment] =
    useState({
      title: "",
      description: "",
      dueDate: "",
      totalMarks: ""
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
      "Assignment Added Successfully"
    );

    console.log(assignment);
  };

  return (
    <div className="dashboard-content">

      <h1>Add Assignment</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Assignment Description"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalMarks"
          placeholder="Total Marks"
          onChange={handleChange}
        />

        <button type="submit">
          Add Assignment
        </button>

      </form>

    </div>
  );
}

export default AddAssignment;