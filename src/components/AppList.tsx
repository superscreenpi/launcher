import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobal } from '../store';

export const AppList: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState('');
  const history = useHistory();
  const apps = useGlobal((state) => state.apps.apps);

  return (
    <div className="app-list">
      <div className="apps-wrapper">
        {apps.map(({ id, name, iconUrl }) => (
          <div
            className={`app-badge ${id === selectedApp ? 'selected' : ''}`}
            data-appname={name}
            onClick={(): void => {
              if (id === selectedApp) {
                history.push(`/app/${id}`);
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
