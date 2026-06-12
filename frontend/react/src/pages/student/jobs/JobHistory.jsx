import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function JobHistory() {

  const applications = [
    {
      company: "TCS",
      role: "Frontend Developer",
      status: "Applied"
    },
    {
      company: "Infosys",
      role: "Data Analyst",
      status: "Selected"
    },
    {
      company: "Wipro",
      role: "Java Developer",
      status: "Pending"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>
            Applied Jobs History
          </h1>

          <table className="history-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {applications.map(
                (
                  item,
                  index
                ) => (
                  <tr key={index}>
                    <td>
                      {item.company}
                    </td>

                    <td>
                      {item.role}
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

export default JobHistory;