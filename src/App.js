// import "./App.css";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import RestorePassword from "./pages/RestorePassword/RestorePassword";
import DoctorView from "./pages/DoctorView/DoctorView";


function App() {
  useEffect(() => {
        if (document.location.pathname === "/") {
      document.location.pathname = "/sign-in";
    }
  }, []);

  return (
    <>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/restore-password" component={RestorePassword} />
      <Route path="/doctor-view" component={DoctorView} />
    </>
  );
}

export default App;
