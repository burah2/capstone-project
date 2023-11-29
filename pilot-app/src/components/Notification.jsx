import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: 'This is a notification!',
    };

    setNotifications([...notifications, newNotification]);
  };

  return (
    <div>
      <header>
        <div id="notificationCenter" className="notification-center">
          {/* Notifications will be dynamically added here */}
          {notifications.map((notification) => (
            <div key={notification.id} className="notification">
              {notification.message}
            </div>
          ))}
        </div>

        {/* Example button to trigger a notification */}
        <button id="Notification" onClick={addNotification}>
          Notification
        </button>
      </header>

      <main>
        {/* Main content of the webpage goes here */}
      </main>
    </div>
  );
};

export default App;
