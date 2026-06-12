import React from "react";

function AssignmentHistory() {
  const history =
    JSON.parse(
      localStorage.getItem("assignmentHistory")
      
    ) || [
      
      {
      testName: "React Authentication Test",
      score: 8,
      totalQuestions: 10,
      percentage: 80,
      date: "12-06-2026"
    },
    {
      testName: "Node REST API Test",
      score: 9,
      totalQuestions: 10,
      percentage: 90,
      date: "12-06-2026"
    },
    {
      testName: "MongoDB CRUD Test",
      score: 7,
      totalQuestions: 10,
      percentage: 70,
      date: "12-06-2026"
    },
    {
      testName: "Express Backend Test",
      score: 10,
      totalQuestions: 10,
      percentage: 100,
      date: "12-06-2026"
    }
    ];
    

  return (
    <div className="history-container">
      <h1>Assignment History</h1>

      <table className="history-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Score</th>
            <th>Percentage</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {history.length > 0 ? (
            history.map((item, index) => (
              <tr key={index}>
                <td>{item.testName}</td>

                <td>
                  {item.score}/{item.totalQuestions}
                </td>

                <td>{item.percentage}%</td>

               <td>{item.submittedAt || item.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                style={{ textAlign: "center" }}
              >
                No Tests Attempted
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AssignmentHistory;