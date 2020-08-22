import React from 'react';
import { AppList } from '../components/AppList';
import { Link } from 'react-router-dom';

export const HomeView: React.FC = () => {
  return (
    <>
      <AppList />
      <div className="menu">
        <Link className="round button" to="/settings" href="#">
          <i className="fas fa-cogs" />
        </Link>
      </div>
    </>
  );
};
