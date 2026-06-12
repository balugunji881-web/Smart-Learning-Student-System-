import express from "express";

import {
  getAssignments,
  addAssignment
} from "../controllers/assignmentController.js";

const router =
  express.Router();

router.get(
  "/",
  getAssignments
);

router.post(
  "/",
  addAssignment
);

export default router;