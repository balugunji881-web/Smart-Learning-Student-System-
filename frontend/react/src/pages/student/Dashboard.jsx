import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import StatsCard from "../../components/StatsCard";

import {
  FaBook,
  FaClipboardList,
  FaBriefcase,
  FaChartLine
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

  {/* Hero Banner */}

  <div className="hero-banner">
    <div className="hero-overlay">
      <h1>Welcome Back 👋</h1>

      <p>
        Track learning progress,
        assignments, and placements.
      </p>
    </div>
  </div>


          {/* Statistics Cards */}

          <div className="stats-grid">

            <StatsCard
              title="Courses"
              value="12"
            />

            <StatsCard
              title="Assignments"
              value="8"
            />

            <StatsCard
              title="Jobs"
              value="15"
            />

            <StatsCard
              title="Completed Tests"
              value="25"
            />

          </div>

          {/* Recent Activities */}

          <div className="dashboard-section">

            <h2>
              <FaChartLine />
              Recent Activities
            </h2>

            <ul className="activity-list">
              <li>
                Completed React Assignment
              </li>

              <li>
                Enrolled in MERN Stack Course
              </li>

              <li>
                Applied for TCS Internship
              </li>

              <li>
                Scored 90% in Mock Test
              </li>
            </ul>

          </div>

         


        </div>

      

</div>
    </>
  );
}

export default Dashboard;