import React from 'react';
import { Time } from '../components/Time';

export const NavBar: React.FC = () => (
  <div className="navbar">
    <div className="icon-bar">
      <button
        className="link"
        onClick={(): void => {
          if (!window.require) {
            return;
          }
          const electron = window.require('electron');
          if (!electron) {
            return;
          }
          electron.ipcRenderer.send('navbar', 'home');
        }}
      >
        <i className="fas fa-home" />
      </button>
    </div>
    <Time />
  </div>
);
