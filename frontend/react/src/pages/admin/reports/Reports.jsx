import Navbar from "../../../components/Navbar";
import AdminSidebar from "../../../components/AdminSidebar";
import { Link } from "react-router-dom";

function Reports() {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <AdminSidebar />

        <div className="dashboard-content">

          <h1>Reports</h1>

          <div className="card-grid">

            <div className="glass-card">

              <h3>Placement Report</h3>

              <p>
                View student placement statistics
              </p>

              <Link to="/admin/placement-report">
                <button>View</button>
              </Link>

            </div>

            <div className="glass-card">

              <h3>Course Report</h3>

              <p>
                View course enrollment statistics
              </p>

              <Link to="/admin/course-report">
                <button>View</button>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Reports;