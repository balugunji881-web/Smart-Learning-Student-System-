import { useState } from "react";

function AddStudent() {

  const [student, setStudent] =
    useState({
      name: "",
      email: "",
      password: ""
    });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Student Added Successfully"
    );

    console.log(student);
  };

  return (
    <div className="dashboard-content">

      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button type="submit">
          Add Student
        </button>

      </form>

    </div>
  );
}

export default AddStudent;