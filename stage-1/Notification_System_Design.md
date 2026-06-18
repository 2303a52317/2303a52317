# Notification System Design

## Priority Inbox Design

The Priority Inbox displays the Top 10 most important unread notifications.

### Priority Rules

Notifications are ranked based on:

1. Type Weight

   * Placement = 3
   * Result = 2
   * Event = 1

2. Recency

   * More recent notifications receive higher priority within the same type.

### Approach

1. Fetch notifications from the provided API.

2. Calculate a score for each notification using:

   Score = Type Weight + Recency

3. Maintain a Min-Heap of size 10.

4. For every notification:

   * Add to heap if heap size is less than 10.
   * Otherwise replace the minimum element if the current notification has a higher score.

5. Sort heap contents in descending order to display the final Top 10 notifications.

### Data Structure Used

Min Heap (Priority Queue)

Reason:

* Efficient maintenance of Top 10 notifications.
* Avoids sorting the entire dataset repeatedly.

### Time Complexity

For N notifications:

* Heap Insert/Replace: O(log 10)
* Total: O(N log 10)

Since 10 is constant:

O(N)

### Space Complexity

O(10)

### Handling Incoming Notifications

When a new notification arrives:

1. Calculate its priority score.
2. Compare it with the minimum element in the heap.
3. If the new notification has a higher priority:

   * Remove the minimum element.
   * Insert the new notification.

This operation takes O(log 10) time and efficiently maintains the Top 10 notifications at all times.
