import { useParams } from "react-router-dom";
import { useState } from "react";

function EditStudent() {

  const { id } = useParams();

  const [student, setStudent] =
    useState({
      name: "Rohith",
      email: "rohith@gmail.com"
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
      "Student Updated Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>
        Edit Student #{id}
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
        />

        <button type="submit">
          Update Student
        </button>

      </form>

    </div>
  );
}

export default EditStudent;