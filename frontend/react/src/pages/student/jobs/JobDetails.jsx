import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function JobDetails() {

  const { id } = useParams();

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>Job Details</h1>

          <div className="glass-card">

            <h2>
              Job ID : {id}
            </h2>

            <p>
              Company :
              TCS
            </p>

            <p>
              Role :
              Frontend Developer
            </p>

            <p>
              Location :
              Hyderabad
            </p>

            <p>
              Experience :
              Fresher
            </p>

            <p>
              Salary :
              ₹4 LPA
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default JobDetails;