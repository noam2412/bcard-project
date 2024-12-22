import axios from "axios";

// הבאת כל הכרטיסים
export const fetchCards = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/cards");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cards:", error);
    return [];
  }
};

// הוספת כרטיס חדש
export const addCard = async (card: { name: string; description: string; location: string }) => {
  try {
    const response = await axios.post("http://localhost:5000/api/cards", card);
    return response.data;
  } catch (error) {
    console.error("Failed to add card:", error);
    throw error;
  }
};

// עריכת כרטיס קיים
export const updateCard = async (id: number, updatedCard: { name: string; description: string }) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/cards/${id}`, updatedCard);
    return response.data;
  } catch (error) {
    console.error("Failed to update card:", error);
    throw error;
  }
};

// מחיקת כרטיס
export const deleteCard = async (id: number) => {
  try {
    await axios.delete(`http://localhost:5000/api/cards/${id}`);
  } catch (error) {
    console.error("Failed to delete card:", error);
    throw error;
  }
};
