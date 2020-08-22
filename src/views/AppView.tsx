import React from 'react';
import { useGlobal } from '../store';
import { Redirect, useParams } from 'react-router-dom';

export const AppView: React.FC = () => {
  const apps = useGlobal((state) => state.apps.apps);
  const { appId } = useParams<{ appId: string }>();
  const app = apps.filter((a) => a.id === appId)[0];

  if (!app) {
    return <Redirect to="/" />;
  }

  return <iframe className="app-view" src={app.openUrl} title={app.name}></iframe>;
};
