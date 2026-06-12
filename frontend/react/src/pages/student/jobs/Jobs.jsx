import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { Link } from "react-router-dom";

function Jobs() {
  const jobs = [
    {
      id: 1,
      company: "TCS",
      role: "Frontend Developer",
      location: "Hyderabad"
    },
    {
      id: 2,
      company: "Infosys",
      role: "Full Stack Developer",
      location: "Bangalore"
    },
    {
      id: 3,
      company: "Wipro",
      role: "Data Analyst",
      location: "Chennai"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <Sidebar />

        <div className="dashboard-content">
          <h1>Available Jobs</h1>

          <div className="jobs-grid">

  <div className="job-card">
    <div className="job-icon">💼</div>

    <h3>TCS Internship</h3>

    <p>Location: Hyderabad</p>

    <span className="job-status open">
      Open
    </span>

    <button>Apply Now</button>
  </div>

  <div className="job-card">
    <div className="job-icon">🚀</div>

    <h3>Frontend Developer</h3>

    <p>Location: Bangalore</p>

    <span className="job-status open">
      Open
    </span>

    <button>Apply Now</button>
  </div>

  <div className="job-card">
    <div className="job-icon">🏢</div>

    <h3>Wipro Graduate Trainee</h3>

    <p>Location: Chennai</p>

    <span className="job-status closing">
      Closing Soon
    </span>

    <button>Apply Now</button>
  </div>

  <div className="job-card">
    <div className="job-icon">🌐</div>

    <h3>Full Stack Developer</h3>

    <p>Location: Remote</p>

    <span className="job-status applied">
      Applied
    </span>

    <button>View Status</button>
  </div>

</div>
        </div>
      </div>
    </>
  );
}

export default Jobs;