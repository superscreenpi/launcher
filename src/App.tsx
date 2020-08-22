import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { SettingsView } from './views/SettingsView';
import { AppView } from './views/AppView';
import { AboutView } from './views/settings/AboutView';
import { NotificationBar } from './components/NotificationBar';

export const App: React.FC = () => {
  return (
    <>
      <NotificationBar />
      <main>
        <Switch>
          <Route exact path="/home" component={HomeView} />
          <Route exact path="/settings" component={SettingsView} />
          <Route exact path="/settings/about" component={AboutView} />
          <Route exact path="/app/:appId" component={AppView} />
          <Redirect to="/home" />
        </Switch>
      </main>
    </>
  );
};
