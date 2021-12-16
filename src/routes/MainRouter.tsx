import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { isLoggedIn } from 'redux/login/selectors';
import { useAppSelector } from 'redux/hooks/hooks';
import NotFound from 'pages/NotFound/NotFound';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { AUTH_PATH, USER_PATH } from './constants';
import { privateRoutes, publicRoutes } from './routes';

const MainRouter = function () {
  const isLoggedInStatus = useAppSelector(isLoggedIn);
  return (
    <Switch>
      {/* @ts-ignore */}
      <Route exact path="/">
        {isLoggedInStatus ? <Redirect to={USER_PATH.MAIN} /> : <Redirect to={AUTH_PATH.SIGN_UP} />}
      </Route>
      {publicRoutes.map((page) => (
        <PublicRoute
          {...page}
          key={page.path}
          isLoggedInStatus={isLoggedInStatus}
        >
          {page.component}
        </PublicRoute>
      ))}
      {privateRoutes.map((page) => (
        <PrivateRoute
          {...page}
          isLoggedInStatus={isLoggedInStatus}
          key={page.path}
        >
          {page.component}
        </PrivateRoute>
      ))}
      <Route><NotFound /></Route>
    </Switch>
  );
};

export default MainRouter;
