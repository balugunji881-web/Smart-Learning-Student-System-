function CourseCard({
  title,
  description,
  progress
}) {
  return (
    <div className="glass-card">

      <h3>{title}</h3>

      <p>{description}</p>

      <div
        className="progress-bar"
      >
        <div
          style={{
            width: progress
          }}
        />
      </div>

      <p>{progress}</p>

      <button>
        Continue Learning
      </button>

    </div>
  );
}

export default CourseCard;