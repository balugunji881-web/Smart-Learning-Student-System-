import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true
    },

    role: {
      type: String,
      required: true
    },

    location: String,

    salary: String
  },
  { timestamps: true }
);

export default mongoose.model(
  "Job",
  jobSchema
);