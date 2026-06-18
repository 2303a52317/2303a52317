import { useEffect, useState } from "react";
import {
  Container,
  Select,
  MenuItem
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";

export default function PriorityNotifications() {

  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    load();
  }, [type]);

  const load = async () => {

    const data = await getNotifications(
      1,
      10,
      type
    );

    const sorted =
      (data.notifications || [])
        .sort((a, b) => b.score - a.score);

    setNotifications(sorted);
  };

  return (
    <Container>

      <h2>Priority Notifications</h2>

      <Select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>
      </Select>

      {notifications.map((n, index) => (
        <NotificationCard
          key={index}
          notification={n}
        />
      ))}
    </Container>
  );
}