import Navbar from "../../../components/Navbar";
import AdminSidebar from "../../../components/AdminSidebar";

function CourseReport() {

  const courses = [
    {
      name: "MERN Stack",
      enrolled: 75
    },
    {
      name: "Data Analytics",
      enrolled: 50
    },
    {
      name: "Java Full Stack",
      enrolled: 60
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <AdminSidebar />

        <div className="dashboard-content">

          <h1>Course Report</h1>

          <table className="history-table">

            <thead>
              <tr>
                <th>Course</th>
                <th>Students Enrolled</th>
              </tr>
            </thead>

            <tbody>

              {courses.map(
                (course, index) => (
                  <tr key={index}>
                    <td>{course.name}</td>
                    <td>{course.enrolled}</td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default CourseReport;