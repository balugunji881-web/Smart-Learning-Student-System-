import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function ContinueLearning() {

  const courses = [
    {
      title:
        "MERN Stack Development",
      progress: "70%"
    },
    {
      title:
        "Data Analytics",
      progress: "45%"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <h1>
            Continue Learning
          </h1>

          <div className="card-grid">

            {courses.map(
              (
                course,
                index
              ) => (
                <div
                  className="glass-card"
                  key={index}
                >

                  <h3>
                    {course.title}
                  </h3>

                  <p>
                    Progress:
                    {course.progress}
                  </p>

                  <div
                    className="progress-bar"
                  >
                    <div
                      className="progress-fill"
                      style={{
                        width:
                          course.progress
                      }}
                    ></div>
                  </div>

                  <button>
                    Resume Course
                  </button>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default ContinueLearning;