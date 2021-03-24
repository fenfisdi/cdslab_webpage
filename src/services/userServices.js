import request from "../httpClient/api.request";

export const registerUserService = async (userForm) => {
  const response = await request(
    `http://localhost:8000/applicant/`,
    "POST",
    userForm
  );
  return response;
};
