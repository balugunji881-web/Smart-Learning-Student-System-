import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function CourseDetails() {

  const { id } = useParams();

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>
            Course Details
          </h1>

          <div className="glass-card">

            <h2>
              Course ID : {id}
            </h2>

            <p>
              MERN Stack Development
            </p>

            <p>
              Learn MongoDB,
              Express.js,
              React.js and Node.js
              from beginner to
              advanced level.
            </p>

            <h3>
              Topics Covered
            </h3>

            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Node JS</li>
              <li>MongoDB</li>
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default CourseDetails;