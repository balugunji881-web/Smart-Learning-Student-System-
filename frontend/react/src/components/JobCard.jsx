function JobCard({
  company,
  role,
  location
}) {
  return (
    <div className="glass-card">

      <h3>{company}</h3>

      <p>{role}</p>

      <p>{location}</p>

      <button>
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;