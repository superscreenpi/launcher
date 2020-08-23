import React from 'react';
import { App } from '../store/apps/state';

export interface Props {
  apps: App[];
}

export const AppList: React.FC<Props> = ({ apps }) => {
  return (
    <div className="app-list">
      <div className="apps">
        {apps.map(({ id, name, iconUrl, openUrl }) => (
          <a key={id} className="app-badge" href={openUrl}>
            <img src={iconUrl} alt={name} />
            <span className="name">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
