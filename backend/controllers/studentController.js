import User from "../models/User.js";

export const getStudents =
  async (req, res) => {
    const students =
      await User.find({
        role: "student"
      });

    res.json(students);
  };