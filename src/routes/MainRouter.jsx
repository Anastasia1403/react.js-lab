import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import NewAppointment from '../pages/NewAppointment/NewAppointment';
import RestorePassword from '../pages/RestorePassword/RestorePassword';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import UserView from '../pages/UserView/UserView';

const MainRouter = function ({ history }) {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <Switch>
      <Route exact path="/">
        {isLoggedIn ? <Redirect to="/user-view" /> : <Redirect to="/sign-up" />}
      </Route>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/restore-password" component={RestorePassword} />
      <Route path="/user-view/new-appointment" render={() => <NewAppointment history={history} />} />
      <Route path="/user-view" component={UserView} />

    </Switch>
  );
};

export default MainRouter;
