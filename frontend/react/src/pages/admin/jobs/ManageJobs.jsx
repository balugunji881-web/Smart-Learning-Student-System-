import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import AdminSidebar from "../../../components/AdminSidebar";

function ManageJobs() {
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

        <AdminSidebar />

        <div className="dashboard-content">

          <div className="page-header">

            <h1>Manage Jobs</h1>

            <Link to="/admin/add-job">
              <button>Add Job</button>
            </Link>

          </div>

          <table className="history-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Role</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {jobs.map((job) => (
                <tr key={job.id}>

                  <td>{job.id}</td>
                  <td>{job.company}</td>
                  <td>{job.role}</td>
                  <td>{job.location}</td>

                  <td>
                    <Link
                      to={`/admin/edit-job/${job.id}`}
                    >
                      <button>Edit</button>
                    </Link>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default ManageJobs;