import { useParams } from "react-router-dom";
import { useState } from "react";

function EditJob() {

  const { id } = useParams();

  const [job, setJob] =
    useState({
      company: "TCS",
      role: "Frontend Developer",
      location: "Hyderabad",
      salary: "4 LPA"
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
      "Job Updated Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>
        Edit Job #{id}
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="company"
          value={job.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="role"
          value={job.role}
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          value={job.salary}
          onChange={handleChange}
        />

        <button type="submit">
          Update Job
        </button>

      </form>

    </div>
  );
}

export default EditJob;