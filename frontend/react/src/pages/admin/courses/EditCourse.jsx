import { useParams } from "react-router-dom";
import { useState } from "react";

function EditCourse() {

  const { id } = useParams();

  const [course, setCourse] =
    useState({
      title: "MERN Stack Development",
      description:
        "Full Stack Web Development",
      duration: "3 Months",
      instructor: "Admin"
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
      "Course Updated Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>
        Edit Course #{id}
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="duration"
          value={course.duration}
          onChange={handleChange}
        />

        <input
          type="text"
          name="instructor"
          value={course.instructor}
          onChange={handleChange}
        />

        <button type="submit">
          Update Course
        </button>

      </form>

    </div>
  );
}

export default EditCourse;