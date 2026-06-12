import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      duration: "3 Months",
      progress: "70%"
    },
    {
      id: 2,
      title: "Data Analytics",
      duration: "2 Months",
      progress: "45%"
    },
    {
      id: 3,
      title: "Java Full Stack",
      duration: "4 Months",
      progress: "20%"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>Available Courses</h1>

          <div className="courses-grid">

  <div className="course-card">
    <div className="course-icon">⚛️</div>

    <h3>React JS</h3>

    <p>Duration: 8 Weeks</p>

    <span className="course-status ongoing">
      Ongoing
    </span>

    <button>Continue Learning</button>
  </div>

  <div className="course-card">
    <div className="course-icon">🟢</div>

    <h3>Node.js</h3>

    <p>Duration: 6 Weeks</p>

    <span className="course-status ongoing">
      Ongoing
    </span>

    <button>Continue Learning</button>
  </div>

  <div className="course-card">
    <div className="course-icon">🍃</div>

    <h3>MongoDB</h3>

    <p>Duration: 4 Weeks</p>

    <span className="course-status completed">
      Completed
    </span>

    <button>View Certificate</button>
  </div>

  <div className="course-card">
    <div className="course-icon">☁️</div>

    <h3>AWS Cloud</h3>

    <p>Duration: 10 Weeks</p>

    <span className="course-status upcoming">
      Upcoming
    </span>

    <button>Enroll Now</button>
  </div>

</div>

        </div>

      </div>
    </>
  );
}

export default Courses;