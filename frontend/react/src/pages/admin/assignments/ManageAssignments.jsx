import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import AdminSidebar from "../../../components/AdminSidebar";

function ManageAssignments() {
  const assignments = [
    {
      id: 1,
      title: "React Authentication",
      dueDate: "15 June 2026",
      marks: 100
    },
    {
      id: 2,
      title: "Node.js API",
      dueDate: "20 June 2026",
      marks: 100
    },
    {
      id: 3,
      title: "MongoDB CRUD",
      dueDate: "25 June 2026",
      marks: 50
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar />

        <div className="dashboard-content">

          <div className="page-header">
            <h1>Manage Assignments</h1>

            <Link to="/admin/add-assignment">
              <button>Add Assignment</button>
            </Link>
          </div>

          <table className="history-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Assignment</th>
                <th>Due Date</th>
                <th>Marks</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {assignments.map((assignment) => (
                <tr key={assignment.id}>
                  <td>{assignment.id}</td>
                  <td>{assignment.title}</td>
                  <td>{assignment.dueDate}</td>
                  <td>{assignment.marks}</td>

                  <td>
                    <Link
                      to={`/admin/edit-assignment/${assignment.id}`}
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

export default ManageAssignments;