import { useState } from "react";

function AddCourse() {

  const [course, setCourse] =
    useState({
      title: "",
      description: "",
      duration: "",
      instructor: ""
    });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Course Added Successfully"
    );

    console.log(course);
  };

  return (
    <div className="dashboard-content">

      <h1>Add Course</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Course Title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Course Description"
          onChange={handleChange}
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={handleChange}
        />

        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          onChange={handleChange}
        />

        <button type="submit">
          Add Course
        </button>

      </form>

    </div>
  );
}

export default AddCourse;