import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 import bgImage from "../../assets/register-bg.jpg";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role:"student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      console.log("Success:", response.data);
      alert("Registration Successful");

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Registration Error:", error);

      if (error.response) {
        console.log("Server Response:", error.response.data);
      }

      alert("Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h1>Register</h1>

        <input
  type="text"
  name="name"
  placeholder="Enter Name"
  value={formData.name}
  onChange={handleChange}
  required
/>

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

<select
  name="role"
  value={formData.role}
  onChange={handleChange}
  required
>
  <option value="student">Student</option>
  <option value="trainer">Trainer</option>
</select>

<button type="submit">Register</button>

        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;