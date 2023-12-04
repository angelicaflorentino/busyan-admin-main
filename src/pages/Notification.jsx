import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

const Notification = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, user: 'David Brigoli', message: 'registered an account. Check it to verify.', active: true },
        { id: 2, user: 'Abel Tesfaye', message: 'registered an account. Check it to verify.', active: false }
    ]);

    const toggleNotification = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, active: !notification.active } : notification
            )
        );
    };

    return (
        <div>
            <h1>Notification</h1>
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`notification-item ${notification.active ? 'active' : 'inactive'}`}
                    onClick={() => toggleNotification(notification.id)}
                >
                    <FaUser className={`user-icon ${notification.active ? 'active' : 'inactive'}`} />
                    <p>
                        <strong>{notification.user}</strong> {notification.message}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Notification;

