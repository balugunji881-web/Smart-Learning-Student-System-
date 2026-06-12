function AssignmentCard({
  title,
  dueDate,
  status
}) {
  return (
    <div className="glass-card">

      <h3>{title}</h3>

      <p>
        Due:
        {dueDate}
      </p>

      <p>
        Status:
        {status}
      </p>

      <button>
        View Assignment
      </button>

    </div>
  );
}

export default AssignmentCard;