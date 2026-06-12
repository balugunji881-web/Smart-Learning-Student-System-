import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function CourseHistory() {

  const history = [
    {
      course:
        "React Development",
      progress: "100%",
      status: "Completed"
    },
    {
      course:
        "Node JS",
      progress: "80%",
      status: "In Progress"
    },
    {
      course:
        "MongoDB",
      progress: "100%",
      status: "Completed"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>
            Course History
          </h1>

          <table
            className="history-table"
          >

            <thead>

              <tr>
                <th>Course</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {history.map(
                (
                  item,
                  index
                ) => (
                  <tr key={index}>
                    <td>
                      {item.course}
                    </td>

                    <td>
                      {item.progress}
                    </td>

                    <td>
                      {item.status}
                    </td>
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

export default CourseHistory;