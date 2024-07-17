// src/components/Notification/Notification.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    // Fetch notifications from the backend
    axios.get('http://localhost:8000/api/notifications')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-2">{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
