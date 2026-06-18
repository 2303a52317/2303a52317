import api from "./api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzYTUyMzE3QHNydS5lZHUuaW4iLCJleHAiOjE3ODE3NjcyMjMsImlhdCI6MTc4MTc2NjMyMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI0N2U4YTc0LTJmZTktNGIxNi04ODA0LWMzOTYwYjVkNzA0MyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImR1Z2dpc2hldHRpIHZhcnNoaXRoYSIsInN1YiI6IjAyMTJmNWRhLTZmNzUtNDZlNS04YmQwLTk1NTBjYmE1YTZkNyJ9LCJlbWFpbCI6IjIzMDNhNTIzMTdAc3J1LmVkdS5pbiIsIm5hbWUiOiJkdWdnaXNoZXR0aSB2YXJzaGl0aGEiLCJyb2xsTm8iOiIyMzAzYTUyMzE3IiwiYWNjZXNzQ29kZSI6ImJEcmVBcSIsImNsaWVudElEIjoiMDIxMmY1ZGEtNmY3NS00NmU1LThiZDAtOTU1MGNiYTVhNmQ3IiwiY2xpZW50U2VjcmV0IjoienhyR1JmaE1wQWVqeWRVWCJ9.8QzYamyqdbHMTtSWAwHUkW5221oQlIU7gv4WoM-UeYE";

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  let url = `/notifications?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const response = await api.get(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });

  return response.data;
};