import { useState } from "react";

function ApplyJob() {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);

    alert(
      "Job Application Submitted Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>Apply Job</h1>

      <div className="glass-card">

        <h2>Frontend Developer</h2>

        <p>Company : TCS</p>

        <p>Location : Hyderabad</p>

        <button onClick={handleApply}>
          Apply Now
        </button>

        {applied && (
          <p>
            Application Submitted
          </p>
        )}

      </div>

    </div>
  );
}

export default ApplyJob;