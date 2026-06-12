import Course from "../models/Course.js";

export const getCourses =
  async (req, res) => {
    const courses =
      await Course.find();

    res.json(courses);
  };

export const addCourse =
  async (req, res) => {
    const course =
      await Course.create(req.body);

    res.status(201).json(course);
  };