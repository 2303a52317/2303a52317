import requests
import heapq
from datetime import datetime

API_URL = "http://4.224.186.213/evaluation-service/notifications"

ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"
TYPE_WEIGHT = {
    "Placement": 3,
    "Result": 2,
    "Event": 1
}


def calculate_score(notification):
    weight = TYPE_WEIGHT.get(notification["Type"], 0)

    timestamp = datetime.strptime(
        notification["Timestamp"],
        "%Y-%m-%d %H:%M:%S"
    )

    recency = timestamp.timestamp()

    return (weight * 1_000_000_000) + recency


def fetch_notifications():
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}"
    }

    response = requests.get(
        API_URL,
        headers=headers
    )

    response.raise_for_status()

    return response.json()["notifications"]


def get_top_10_notifications():
    notifications = fetch_notifications()

    min_heap = []

    for notification in notifications:

        score = calculate_score(notification)

        if len(min_heap) < 10:
            heapq.heappush(min_heap, (score, notification))
        else:
            if score > min_heap[0][0]:
                heapq.heapreplace(
                    min_heap,
                    (score, notification)
                )

    top_notifications = sorted(
        min_heap,
        key=lambda x: x[0],
        reverse=True
    )

    return [item[1] for item in top_notifications]


if __name__ == "__main__":

    top_notifications = get_top_10_notifications()

    print("\n===== PRIORITY INBOX (TOP 10) =====\n")

    for i, notification in enumerate(
        top_notifications,
        start=1
    ):
        print(
            f"{i}. "
            f"{notification['Type']} | "
            f"{notification['Message']} | "
            f"{notification['Timestamp']}"
        )