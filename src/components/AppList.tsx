import React, { useState } from 'react';
import { useGlobal } from '../store';

export const AppList: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState('');
  const apps = useGlobal((state) => state.apps.apps);

  return (
    <div className="app-list">
      <div className="apps-wrapper">
        {apps.map(({ id, name, iconUrl, openUrl }) => (
          <div
            key={id}
            className={`app-badge ${id === selectedApp ? 'selected' : ''}`}
            data-appname={name}
            onClick={(): void => {
              if (id === selectedApp) {
                window.location.href = openUrl;
              } else {
                setSelectedApp(id);
              }
            }}
          >
            <img src={iconUrl} alt={name} />
          </div>
        ))}
      </div>
    </div>
  );
};
