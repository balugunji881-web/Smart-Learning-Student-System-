import Navbar from "../../../components/Navbar";
import AdminSidebar from "../../../components/AdminSidebar";

function PlacementReport() {

  const placements = [
    {
      company: "TCS",
      selected: 20
    },
    {
      company: "Infosys",
      selected: 15
    },
    {
      company: "Wipro",
      selected: 10
    },
    {
      company: "Accenture",
      selected: 12
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <AdminSidebar />

        <div className="dashboard-content">

          <h1>Placement Report</h1>

          <table className="history-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Students Selected</th>
              </tr>
            </thead>

            <tbody>

              {placements.map(
                (item, index) => (
                  <tr key={index}>
                    <td>{item.company}</td>
                    <td>{item.selected}</td>
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

export default PlacementReport;