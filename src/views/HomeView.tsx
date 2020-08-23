import React from 'react';
import { AppList } from '../components/AppList';
import { useGlobal } from '../store';
import settings from '../images/settings.png';

export const HomeView: React.FC = () => {
  const apps = useGlobal((state) => state.apps.apps);

  return (
    <>
      <AppList
        apps={[
          ...apps,
          {
            id: 'io.github.superscreen.launcher.settings',
            name: 'Settings',
            openUrl: '/launcher/#/settings',
            iconUrl: settings,
          },
        ]}
      />
    </>
  );
};
