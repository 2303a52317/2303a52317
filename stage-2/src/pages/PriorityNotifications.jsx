import { useEffect, useState } from "react";
import {
  Container,
  Select,
  MenuItem,
  Typography,
  Box
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";

export default function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  const load = async () => {
    try {
      console.log("Loading notifications. Type =", type);

      const data = await getNotifications(
        1,
        10,
        type
      );

      console.log("API Response:", data);

      const sorted = (data.notifications || []).sort(
        (a, b) => (b.score || 0) - (a.score || 0)
      );

      setNotifications(sorted);
    } catch (error) {
      console.error(
        "Failed to load notifications:",
        error.response?.status
      );

      console.error(
        "Server Response:",
        error.response?.data
      );

      setNotifications([]);
    }
  };

  useEffect(() => {
    load();
  }, [type]);

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="event">
            Event
          </MenuItem>

          <MenuItem value="result">
            Result
          </MenuItem>

          <MenuItem value="placement">
            Placement
          </MenuItem>
        </Select>
      </Box>

      {notifications.length > 0 ? (
        notifications.map((n, index) => (
          <NotificationCard
            key={index}
            notification={n}
          />
        ))
      ) : (
        <Typography>
          No notifications found
        </Typography>
      )}
    </Container>
  );
}