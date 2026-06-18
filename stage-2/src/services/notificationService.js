import axios from "axios";

const API_URL = "http://localhost:5000";

export const getNotifications = async (page, limit) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${API_URL}/notifications?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};