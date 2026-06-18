import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

export default function NotificationCard({
  notification,
  viewed
}) {
  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: viewed
          ? "5px solid gray"
          : "5px solid red"
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {notification?.type ||
            notification?.Type ||
            "Notification"}
        </Typography>

        <Typography>
          {notification?.message ||
            notification?.Message ||
            "No message"}
        </Typography>

        <Typography variant="caption">
          Score:{" "}
          {notification?.score ||
            notification?.Score ||
            0}
        </Typography>
      </CardContent>
    </Card>
  );
}