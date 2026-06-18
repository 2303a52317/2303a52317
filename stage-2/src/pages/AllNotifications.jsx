import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";
import {
  getViewed,
  markViewed
} from "../utils/viewedNotifications";

export default function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const data = await getNotifications(1, 20);

      alert(
        "SUCCESS:\n" +
        JSON.stringify(data, null, 2)
      );

      const items =
        data?.notifications ||
        data?.data ||
        [];

      setNotifications(items);

      items.forEach((_, index) => {
        markViewed(index);
      });
    } catch (error) {
      alert(
        "ERROR:\n" +
        JSON.stringify(
          error.response?.data || error.message,
          null,
          2
        )
      );

      console.error(error);
      setNotifications([]);
    }
  };

  const viewed = getViewed();

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h3" gutterBottom>
        All Notifications
      </Typography>

      {notifications.length === 0 ? (
        <Typography>
          No notifications found
        </Typography>
      ) : (
        notifications.map((n, index) => (
          <NotificationCard
            key={index}
            notification={n}
            viewed={viewed.includes(index)}
          />
        ))
      )}
    </Container>
  );
}