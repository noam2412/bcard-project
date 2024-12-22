import axios from "axios";

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:5000/api/auth/register", {
    email,
    password,
  });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("isAdmin", response.data.isAdmin); // שמירת מידע על האם המשתמש אדמין
  return response.data;
};
