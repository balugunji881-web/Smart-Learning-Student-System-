import API from "./api";

export const getJobs = () => {
  return API.get("/jobs");
};

export const getJobById = (
  id
) => {
  return API.get(
    `/jobs/${id}`
  );
};

export const addJob = (
  job
) => {
  return API.post(
    "/jobs",
    job
  );
};

export const updateJob = (
  id,
  job
) => {
  return API.put(
    `/jobs/${id}`,
    job
  );
};

export const deleteJob = (
  id
) => {
  return API.delete(
    `/jobs/${id}`
  );
};