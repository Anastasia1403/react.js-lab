import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewAppointment from '../pages/NewAppointment/NewAppointment';
import RestorePassword from '../pages/RestorePassword/RestorePassword';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import UserView from '../pages/UserView/UserView';
import { isLoggedIn } from '../redux/login/selectors';

const MainRouter = function () {
  const isLoggedInStatus = useSelector(isLoggedIn);
  return (
    <Switch>
      <Route exact path="/">
        {isLoggedInStatus ? <Redirect to="/user-view" /> : <Redirect to="/sign-up" />}
      </Route>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/restore-password" component={RestorePassword} />
      <Route path="/user-view/new-appointment" component={NewAppointment} />
      <Route path="/user-view" component={UserView} />
    </Switch>
  );
};

export default MainRouter;
