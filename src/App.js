import React from "react";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import "./styles.css";
import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Signin}/>
      </Switch>
    </>
  );
}
