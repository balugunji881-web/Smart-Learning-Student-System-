import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "React Authentication",
      dueDate: "15 June 2026",
      status: "Pending"
    },
    {
      id: 2,
      title: "Node REST API",
      dueDate: "20 June 2026",
      status: "Pending"
    },
    {
      id: 3,
      title: "MongoDB CRUD",
      dueDate: "25 June 2026",
      status: "Completed"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>Assignments</h1>

          <div className="assignments-grid">

  <div className="assignment-card">
    <div className="assignment-icon">⚛️</div>

    <h3>React Authentication</h3>

    <p>📅 Due Date: 15 June 2026</p>


    <Link to="/assignment-test/1">
  <button>Take Test</button>
</Link>
  </div>

  <div className="assignment-card">
    <div className="assignment-icon">🟢</div>

    <h3>Node REST API</h3>

    <p>📅 Due Date: 20 June 2026</p>

    

    <Link to="/assignment-test/2">
  <button>Take Test</button>
</Link>
  </div>

  <div className="assignment-card">
    <div className="assignment-icon">🍃</div>

    <h3>MongoDB CRUD</h3>

    <p>📅 Due Date: 25 June 2026</p>



    <Link to="/assignment-test/3">
  <button>Take Test</button>
</Link>
  </div>

  <div className="assignment-card">
    <div className="assignment-icon">🚀</div>

    <h3>Express Backend</h3>

    <p>📅 Due Date: 28 June 2026</p>



  <Link to="/assignment-test/4">
  <button>Take Test</button>
</Link>
  </div>

</div>
        </div>

      </div>
    </>
  );
}

export default Assignments;