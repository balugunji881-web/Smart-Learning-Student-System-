import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";

function AccountDetails() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

          <div className="glass-card">

            <h1>Account Details</h1>

            <p>
              <strong>Name :</strong>{" "}
              {user?.name}
            </p>

            <p>
              <strong>Email :</strong>{" "}
              {user?.email}
            </p>

            <p>
              <strong>Role :</strong>{" "}
              {user?.role}
            </p>

            <p>
              <strong>Joined :</strong>{" "}
              {user?.joined}
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default AccountDetails;