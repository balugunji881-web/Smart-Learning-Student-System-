import API from "./api";

export const getCourses = () => {
  return API.get("/courses");
};

export const getCourseById = (
  id
) => {
  return API.get(
    `/courses/${id}`
  );
};

export const addCourse = (
  course
) => {
  return API.post(
    "/courses",
    course
  );
};

export const updateCourse = (
  id,
  course
) => {
  return API.put(
    `/courses/${id}`,
    course
  );
};

export const deleteCourse = (
  id
) => {
  return API.delete(
    `/courses/${id}`
  );
};