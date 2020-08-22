import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeView } from './views/HomeView';
import { SettingsView } from './views/SettingsView';
import { AboutView } from './views/settings/AboutView';

export const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={HomeView}/>
        <Route exact path="/settings" component={SettingsView}/>
        <Route exact path="/settings/about" component={AboutView}/>
        <Redirect to="/home"/>
      </Switch>
    </>
  );
};
