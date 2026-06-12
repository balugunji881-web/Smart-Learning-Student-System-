import API from "./api";

export const getAssignments =
  () => {
    return API.get(
      "/assignments"
    );
  };

export const getAssignmentById =
  (id) => {
    return API.get(
      `/assignments/${id}`
    );
  };

export const addAssignment = (
  assignment
) => {
  return API.post(
    "/assignments",
    assignment
  );
};

export const updateAssignment = (
  id,
  assignment
) => {
  return API.put(
    `/assignments/${id}`,
    assignment
  );
};

export const deleteAssignment =
  (id) => {
    return API.delete(
      `/assignments/${id}`
    );
  };