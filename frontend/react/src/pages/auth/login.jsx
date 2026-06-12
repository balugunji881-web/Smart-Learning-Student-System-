import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      console.log(response.data);
      login(response.data);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };


  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <div className="links">
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

        <p>
          New User? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;