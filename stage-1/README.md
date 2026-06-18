# Stage 1 - Priority Inbox

## Description

This project fetches notifications from the evaluation API and displays the Top 10 priority notifications.

Priority is determined using:

* Placement > Result > Event
* Recency

## Technologies

* Python
* Requests
* Heap Queue (heapq)

## Run

Install dependencies:

pip install requests

Run:

python src/priority_inbox.py

## Output

The program prints the Top 10 priority notifications ranked according to the specified rules.

## Complexity

Time Complexity: O(N log 10)

Space Complexity: O(10)
