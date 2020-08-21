import React from 'react';
import { useGlobal } from '../store';

export const SettingsView: React.FC = () => {
  const settings = useGlobal((state) => state.settings);

  return <pre>{JSON.stringify(settings)}</pre>;
};
