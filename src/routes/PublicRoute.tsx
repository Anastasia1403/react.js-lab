import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { USER_PATH } from './constants';

interface RouteProps {
  children: any,
  isLoggedInStatus: boolean,
  exact?: boolean,
  path: string,
}

const PublicRoute = function ({ children, isLoggedInStatus, ...rest }: RouteProps) {
  return (
    (!isLoggedInStatus) ? <Route {...rest}>{children}</Route>
      : (<Redirect to={USER_PATH.MAIN} />)

  );
};

export default PublicRoute;
