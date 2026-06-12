import { useState } from "react";

function EditProfile() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Profile Updated Successfully"
    );
  };

  return (
    <div className="dashboard-content">

      <h1>Edit Profile</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">
          Update
        </button>

      </form>

    </div>
  );
}

export default EditProfile;