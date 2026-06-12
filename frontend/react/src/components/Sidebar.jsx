import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaClipboardList,
  FaBook,
  FaBriefcase,
  FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        <FaBars />
      </button>

      <h2 className="sidebar-title">
        {!collapsed && "Student"}
      </h2>

      <ul>
        <li>
          <Link to="/dashboard">
            <FaHome />
            {!collapsed && <span>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link to="/assignments">
            <FaClipboardList />
            {!collapsed && <span>Assignments</span>}
          </Link>
        </li>

        <li>
          <Link to="/courses">
            <FaBook />
            {!collapsed && <span>Courses</span>}
          </Link>
        </li>

        <li>
          <Link to="/jobs">
            <FaBriefcase />
            {!collapsed && <span>Jobs</span>}
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUser />
            {!collapsed && <span>Profile</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;