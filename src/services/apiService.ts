import axios from "axios";
import { Product } from "../interfaces/User";

const API_URL = "http://localhost:5000";

export const registerUser = async (name: string, email: string, password: string) => {
    try {
      const newUser = { name, email, password, isAdmin: false };
      const response = await axios.post(`${API_URL}/users`, newUser);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      params: { email, password }, // פילטר לפי אימייל וסיסמה
    });

    if (response.data.length > 0) {
      const user = response.data[0];
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      };
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};


export const getCardById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/cards/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch card with ID ${id}:`, error);
    throw error;
  }
};

export const fetchCards = async () => {
  const response = await axios.get(`${API_URL}/cards`);
  return response.data;
};


export const addCard = async (card: { name: string; description: string }) => {
  const response = await axios.post(`${API_URL}/cards`, card);
  return response.data;
};

export const updateCard = async (id: number, card: { name: string; description: string }) => {
  const response = await axios.put(`${API_URL}/cards/${id}`, card);
  return response.data;
};

export const deleteCard = async (id: number) => {
  await axios.delete(`${API_URL}/cards/${id}`);
};

export const addProduct = async (product: Product) => {
    const response = await axios.post(`${API_URL}/api/products`, product);
    return response.data;
  };
  