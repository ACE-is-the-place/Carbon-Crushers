import * as React from 'react';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import HomePage from './HomePage';
import Profile from './Profile';
import Login from './Login';
import Stats from './Stats';
import Graphs from './Graph';
import Shower from './Stat Entries/Shower';
import Footer from './Footer';
import Route from '../models/Route';
import LoginData from '../models/LoginData';
import StatsBreakdown from './StatsBreakdown';
import Friends from './Friends';
import Leaderboard from './Leaderboard';
import Notifications from './Notifications';

const App: React.FC = (): React.ReactElement => {
  const [currentStatus, setCurrentStatus] = useState(false);

  // check if user is logged in
  const getLoginStatus = (): void => {
    axios.get('/isLoggedin')
      .then(({ data }: LoginData): void => setCurrentStatus(data))
      .catch((err: string) => console.warn(err));
  };
  getLoginStatus();

  const isLoggedIn = (currentStatus: boolean): React.ReactElement => {
    return !currentStatus ? <Login /> : <HomePage />;
  };

  const homeRoute: Route = {
    path: '/',
    element: isLoggedIn(currentStatus)
  };

  const profileRoute: Route = {
    path: '/profile',
    element: <Profile />
  };

  const statsRoute: Route = {
    path: '/stats',
    element: <Stats />
  };

  const graphsRoute: Route = {
    path: '/graphs',
    element: <Graphs />
  };

  const showerRoute: Route = {
    path: '/showers',
    element: <Shower />
  };

  const statsBreakdownRoute: Route = {
    path: '/statsBreakdown',
    element: <StatsBreakdown/>
  };

  const friendsRoute: Route = {
    path: '/friends',
    element: <Friends/>
  };

  const leaderboardRoute: Route = {
    path: '/leaderboard',
    element: <Leaderboard/>
  };

  const notificationsRoute: Route = {
    path: '/notifications',
    element: <Notifications/>
  };

  const logoutRoute: Route = {
    path: '/',
    element: <Profile />
  };

  const checkLoggedIn = (): React.ReactElement => {
    if (currentStatus) {
      return (
        // <div id='wrapper'>
        <Footer />
        // </div>
      );
    }
  };

  const routing = useRoutes([homeRoute, profileRoute, statsRoute, graphsRoute, showerRoute, statsBreakdownRoute, friendsRoute, logoutRoute, notificationsRoute, leaderboardRoute]);

  return (
    <div>
      <Nav />
      { routing }
      { checkLoggedIn() }
    </div>
  );
};

export default App;
