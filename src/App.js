// import "./App.css";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import RestorePassword from "./pages/RestorePassword/RestorePassword";
import DoctorView from "./pages/DoctorView/DoctorView";
import UserView from "./pages/UserView/UserView";


function App() {
  useEffect(() => {
        if (document.location.pathname === "/") {
      document.location.pathname = "/sign-up";
    }
  }, []);

  return (
    <>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/restore-password" component={RestorePassword} />
      <Route path="/doctor-view" component={DoctorView} />
      <Route path="/user-view" component={UserView} />

    </>
  );
}

export default App;
