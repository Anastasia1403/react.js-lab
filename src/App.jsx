import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import RestorePassword from './pages/RestorePassword/RestorePassword';
import DoctorView from './pages/DoctorView/DoctorView';
import UserView from './pages/UserView/UserView';

const App = function () {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/sign-up" />
      </Route>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/restore-password" component={RestorePassword} />
      <Route path="/doctor-view" component={DoctorView} />
      <Route path="/user-view" component={UserView} />
    </Switch>
  );
};

export default App;
