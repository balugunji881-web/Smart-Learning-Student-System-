import Job from "../models/Job.js";

export const getJobs =
  async (req, res) => {
    const jobs = await Job.find();

    res.json(jobs);
  };

export const addJob =
  async (req, res) => {
    const job =
      await Job.create(req.body);

    res.status(201).json(job);
  };