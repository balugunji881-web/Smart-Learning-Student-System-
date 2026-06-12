import { useState } from "react";

function AddJob() {

  const [job, setJob] =
    useState({
      company: "",
      role: "",
      location: "",
      salary: ""
    });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Job Added Successfully"
    );

    console.log(job);
  };

  return (
    <div className="dashboard-content">

      <h1>Add Job</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="role"
          placeholder="Job Role"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary Package"
          onChange={handleChange}
        />

        <button type="submit">
          Add Job
        </button>

      </form>

    </div>
  );
}

export default AddJob;