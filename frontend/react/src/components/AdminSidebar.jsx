import {
  FaUsers,
  FaBook,
  FaClipboardList,
  FaBriefcase,
  FaChartBar
} from "react-icons/fa";

import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidebar">

      <h2>Admin</h2>

      <ul>

        <li>
          <Link to="/admin">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/students">
            <FaUsers />
            Students
          </Link>
        </li>

        <li>
          <Link to="/admin/courses">
            <FaBook />
            Courses
          </Link>
        </li>

        <li>
          <Link to="/admin/assignments">
            <FaClipboardList />
            Assignments
          </Link>
        </li>

        <li>
          <Link to="/admin/jobs">
            <FaBriefcase />
            Jobs
          </Link>
        </li>

        <li>
          <Link to="/admin/reports">
            <FaChartBar />
            Reports
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default AdminSidebar;