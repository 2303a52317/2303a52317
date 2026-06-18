import { useEffect, useState } from "react";
import { Container } from "@mui/material";
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
    const data = await getNotifications(1, 20);
    setNotifications(data.notifications || []);
  };

  const viewed = getViewed();

  return (
    <Container>
      <h2>All Notifications</h2>

      {notifications.map((n, index) => {

        markViewed(index);

        return (
          <NotificationCard
            key={index}
            notification={n}
            viewed={viewed.includes(index)}
          />
        );
      })}
    </Container>
  );
}