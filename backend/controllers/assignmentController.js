import Assignment from "../models/Assignment.js";

export const getAssignments =
  async (req, res) => {
    const assignments =
      await Assignment.find();

    res.json(assignments);
  };

export const addAssignment =
  async (req, res) => {
    const assignment =
      await Assignment.create(req.body);

    res.status(201).json(
      assignment
    );
  };