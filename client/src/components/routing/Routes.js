import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../layout/UserArea/NavBar";
import Calendar from "../pages/UserArea/Calendar";

import Flashcards from "../pages/UserArea/Flashcards";
import PomodoroTimer from "../pages/UserArea/PomodoroTimer";
import Dashboard from "../pages/UserArea/Dashboard";
import Todos from "../pages/UserArea/Todos";
import PageNotFound from "../pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import Alert from "../layout/Alert";

const Routes = (props) => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <NavBar />
      <section className="w-100 h-100">
        <Alert />
        <Switch>
          <PrivateRoute exact path="/calendar" component={Calendar} />
          <PrivateRoute exact path="/flashcards" component={Flashcards} />
          <PrivateRoute
            exact
            path="/pomodoro-timer"
            component={PomodoroTimer}
          />
          <PrivateRoute exact path="/Todos" component={Todos} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default Routes;
