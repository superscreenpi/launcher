import React from 'react';
import { Link } from 'react-router-dom';
import { Time } from './Time';

export const NotificationBar: React.FC = () => (
  <header className="notification-bar">
    <div className="icon-bar">
      <Link to="/home">
        <i className="fas fa-home" />
      </Link>
    </div>
    <div className="icon-bar">
      <Time />
      <i className="fas fa-wifi" />
    </div>
  </header>
);
