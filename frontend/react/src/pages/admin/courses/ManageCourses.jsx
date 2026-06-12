import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import AdminSidebar from "../../../components/AdminSidebar";

function ManageCourses() {
  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      duration: "3 Months"
    },
    {
      id: 2,
      title: "Data Analytics",
      duration: "2 Months"
    },
    {
      id: 3,
      title: "Java Full Stack",
      duration: "4 Months"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">
        <AdminSidebar />

        <div className="dashboard-content">

          <div className="page-header">
            <h1>Manage Courses</h1>

            <Link to="/admin/add-course">
              <button>Add Course</button>
            </Link>
          </div>

          <table className="history-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.duration}</td>

                  <td>
                    <Link
                      to={`/admin/edit-course/${course.id}`}
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

export default ManageCourses;