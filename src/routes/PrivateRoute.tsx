import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AUTH_PATH } from './constants';

interface RouteProps {
  children: any,
  isLoggedInStatus: boolean,
  exact?: boolean,
  path: string,
}

const PrivateRoute = function ({ children, isLoggedInStatus, ...rest }: RouteProps) {
  return (
    (isLoggedInStatus) ? <Route {...rest}>{children}</Route>
      : (<Redirect to={AUTH_PATH.SIGN_UP} />)

  );
};

export default PrivateRoute;
