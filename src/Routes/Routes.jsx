import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

const Routes = () => {
  return (
    <>
      <div>
        <Link to="/">Tasks</Link>
        <Link to="/login">Login</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
};
export { Routes };
