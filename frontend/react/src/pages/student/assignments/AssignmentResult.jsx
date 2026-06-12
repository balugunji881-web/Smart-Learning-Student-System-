import { Link } from "react-router-dom";

function AssignmentResult() {
  const score =
    localStorage.getItem(
      "assignmentScore"
    );

  const totalQuestions =
    localStorage.getItem(
      "totalQuestions"
    );

  const percentage =
    localStorage.getItem(
      "assignmentPercentage"
    );

  return (
    <div className="result-container">
      <div className="glass-card">
        <h1>Assignment Result</h1>

        <h2>
          Score: {score}/{totalQuestions}
        </h2>

        <h2>
          Percentage: {percentage}%
        </h2>

        <p>
          Test Submitted Successfully
        </p>

        <Link to="/assignment-history">
          <button>
            View History
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AssignmentResult;