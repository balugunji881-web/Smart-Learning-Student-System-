import Navbar from "../../components/Navbar";
import AdminSidebar from "../../components/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <AdminSidebar />

        <div className="dashboard-content">

          <h1>Admin Dashboard</h1>

          <div className="stats-grid">

            <div className="glass-card">
              <h2>150</h2>
              <p>Total Students</p>
            </div>

            <div className="glass-card">
              <h2>25</h2>
              <p>Total Courses</p>
            </div>

            <div className="glass-card">
              <h2>40</h2>
              <p>Total Assignments</p>
            </div>

            <div className="glass-card">
              <h2>18</h2>
              <p>Total Jobs</p>
            </div>

          </div>

          <div className="glass-card">

            <h2>Recent Activities</h2>

            <ul>
              <li>New Student Registered</li>
              <li>Course Added Successfully</li>
              <li>Assignment Updated</li>
              <li>Job Posted by Admin</li>
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;