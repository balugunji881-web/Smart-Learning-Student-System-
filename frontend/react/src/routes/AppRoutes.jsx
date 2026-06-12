import { Routes, Route } from "react-router-dom";

/* Auth */

import Login from "../pages/auth/login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

/* Student */

import Dashboard from "../pages/student/Dashboard";

import Assignments from "../pages/student/assignments/Assignments";
import AssignmentTest from "../pages/student/assignments/AssignmentTest";
import AssignmentHistory from "../pages/student/assignments/AssignmentHistory";
import AssignmentResult from "../pages/student/assignments/AssignmentResult";

import Courses from "../pages/student/courses/Courses";
import CourseDetails from "../pages/student/courses/CourseDetails";
import CourseHistory from "../pages/student/courses/CourseHistory";
import ContinueLearning from "../pages/student/courses/ContinueLearning";

import Jobs from "../pages/student/jobs/Jobs";
import ApplyJob from "../pages/student/jobs/ApplyJob";
import JobDetails from "../pages/student/jobs/JobDetails";
import JobHistory from "../pages/student/jobs/JobHistory";

import Profile from "../pages/student/profile/Profile";
import AccountDetails from "../pages/student/profile/AccountDetails";
import EditProfile from "../pages/student/profile/EditProfile";
import ChangePassword from "../pages/student/profile/ChangePassword";

/* Admin */

import AdminDashboard from "../pages/admin/AdminDashboard";

import Students from "../pages/admin/students/Students";
import AddStudent from "../pages/admin/students/AddStudent";
import EditStudent from "../pages/admin/students/EditStudent";

import ManageCourses from "../pages/admin/courses/ManageCourses";
import AddCourse from "../pages/admin/courses/AddCourse";
import EditCourse from "../pages/admin/courses/EditCourse";

import ManageAssignments from "../pages/admin/assignments/ManageAssignments";
import AddAssignment from "../pages/admin/assignments/AddAssignment";
import EditAssignment from "../pages/admin/assignments/EditAssignment";

import ManageJobs from "../pages/admin/jobs/ManageJobs";
import AddJob from "../pages/admin/jobs/AddJob";
import EditJob from "../pages/admin/jobs/EditJob";

import Reports from "../pages/admin/reports/Reports";
import PlacementReport from "../pages/admin/reports/PlacementReport";
import CourseReport from "../pages/admin/reports/CourseReport";

function AppRoutes() {
  return (
    <Routes>

      {/* Auth */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Student */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/assignments"
        element={<Assignments />}
      />

      <Route
        path="/assignment-test/:id"
        element={<AssignmentTest />}
      />

      <Route
        path="/assignment-history"
        element={<AssignmentHistory />}
      />

      <Route
        path="/assignment-result"
        element={<AssignmentResult />}
      />

      <Route
        path="/courses"
        element={<Courses />}
      />

      <Route
        path="/course-details/:id"
        element={<CourseDetails />}
      />

      <Route
        path="/course-history"
        element={<CourseHistory />}
      />

      <Route
        path="/continue-learning"
        element={<ContinueLearning />}
      />

      <Route
        path="/jobs"
        element={<Jobs />}
      />

      <Route
        path="/apply-job"
        element={<ApplyJob />}
      />

      <Route
        path="/job-details/:id"
        element={<JobDetails />}
      />

      <Route
        path="/job-history"
        element={<JobHistory />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/account-details"
        element={<AccountDetails />}
      />

      <Route
        path="/edit-profile"
        element={<EditProfile />}
      />

      <Route
        path="/change-password"
        element={<ChangePassword />}
      />

       
      

      {/* Admin */}

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/students"
        element={<Students />}
      />

      <Route
        path="/admin/add-student"
        element={<AddStudent />}
      />

      <Route
        path="/admin/edit-student/:id"
        element={<EditStudent />}
      />

      <Route
        path="/admin/courses"
        element={<ManageCourses />}
      />

      <Route
        path="/admin/add-course"
        element={<AddCourse />}
      />

      <Route
        path="/admin/edit-course/:id"
        element={<EditCourse />}
      />

      <Route
        path="/admin/assignments"
        element={<ManageAssignments />}
      />

      <Route
        path="/admin/add-assignment"
        element={<AddAssignment />}
      />

      <Route
        path="/admin/edit-assignment/:id"
        element={<EditAssignment />}
      />

      <Route
        path="/admin/jobs"
        element={<ManageJobs />}
      />

      <Route
        path="/admin/add-job"
        element={<AddJob />}
      />

      <Route
        path="/admin/edit-job/:id"
        element={<EditJob />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />

      <Route
        path="/admin/placement-report"
        element={<PlacementReport />}
      />

      <Route
        path="/admin/course-report"
        element={<CourseReport />}
      />

    </Routes>
  );
}

export default AppRoutes;