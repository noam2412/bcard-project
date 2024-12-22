import axios from "axios";
import { User } from "../interfaces/User";

const api: string = `${process.env.REACT_APP_API}/users`;

// login
export function checkUser(user: User) {
  return axios.get(`${api}?email=${user.email}&&password=${user.password}`);
}

// register
export function addUser(user: User) {
  return axios.post(api, user);
}

// profile
export function getUserById() {
  const id = JSON.parse(localStorage.getItem("userId") as string);
  return axios.get(api + "/" + id);
}

 // check if the user is an admin
export async function checkIfAdmin(): Promise<boolean> {
  try {
    // Check if the user is logged in
    const userId = localStorage.getItem("userId");
    if (userId) {
      // Fetch user details
      const response = await getUserById();
      const user = response.data;

      // Log admin status for debugging
      console.log("Admin status:", user.isAdmin);

      // Return true if user is admin, otherwise false
      return user.isAdmin || false;
    }

    // User is not logged in
    return false;
  } catch (error) {
    // Log error and return false
    console.error("Error checking if user is admin:", error);
    return false;
  }
}
