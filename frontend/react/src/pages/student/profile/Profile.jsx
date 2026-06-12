import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEdit,
  FaLock,
  FaSignOutAlt
} from "react-icons/fa";



function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">

         <div className="profile-actions">

  <Link to="/account-details">
    <button className="profile-btn account-btn">
      <FaUser />
      Account Details
    </button>
  </Link>

  <Link to="/edit-profile">
    <button className="profile-btn edit-btn">
      <FaEdit />
      Edit Profile
    </button>
  </Link>

  <Link to="/change-password">
    <button className="profile-btn password-btn">
      <FaLock />
      Change Password
    </button>
  </Link>

  <Link to="/login">
    <button className="profile-btn logout-btn">
      <FaSignOutAlt />
      Logout
    </button>
  </Link>

</div>
        </div>

      </div>
    </>
  );
}

export default Profile;