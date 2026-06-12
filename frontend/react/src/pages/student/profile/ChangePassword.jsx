import { useState } from "react";

function ChangePassword() {

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      password !==
      confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );
      return;
    }

    alert(
      "Password Changed Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>
        Change Password
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <button type="submit">
          Update Password
        </button>

      </form>

    </div>
  );
}

export default ChangePassword;