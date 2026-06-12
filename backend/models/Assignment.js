import mongoose from "mongoose";

const assignmentSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true
      },

      description: String,

      dueDate: Date,

      totalMarks: Number
    },
    { timestamps: true }
  );

export default mongoose.model(
  "Assignment",
  assignmentSchema
);