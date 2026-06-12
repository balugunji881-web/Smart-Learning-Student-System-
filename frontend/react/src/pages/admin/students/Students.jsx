import { Link } from "react-router-dom";
import AdminSidebar from "../../../components/AdminSidebar";
import Navbar from "../../../components/Navbar";

function Students() {
  const students = [
    {
      id: 1,
      name: "Rohith",
      email: "rohith@gmail.com"
    },
    {
      id: 2,
      name: "Pavan",
      email: "pavan@gmail.com"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <AdminSidebar />

        <div className="dashboard-content">

          <div className="page-header">
            <h1>Students</h1>

            <Link to="/admin/add-student">
              <button>Add Student</button>
            </Link>
          </div>

          <table className="history-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>

                  <td>
                    <Link
                      to={`/admin/edit-student/${student.id}`}
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

export default Students;