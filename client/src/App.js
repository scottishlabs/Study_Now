import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthState from "./context/auth/AuthState";
import EventState from "./context/events/EventState";
import TodoState from "./context/todo/TodoState";
import PomodoroState from "./context/pomodoroTimer/PomodoroState";
import AlertState from "./context/alert/AlertState";
import FlashcardsState from "./context/flashcards/FlashcardsState";

import Landing from "./components/pages/LandingArea/Landing";
import Routes from "./components/routing/Routes";
import SignIn from "./components/pages/LandingArea/SignIn";
import SignUp from "./components/pages/LandingArea/SignUp";

import "./App.css";

const App = () => {
  // Single page application switcher for each page in the application
  return (
    <AuthState>
      <AlertState>
        <EventState>
          <TodoState>
            <PomodoroState>
              <FlashcardsState>
                <Router>
                  <>
                    <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route exact path="/signin" component={SignIn} />
                      <Route exact path="/signup" component={SignUp} />
                      <Route component={Routes} />
                    </Switch>
                  </>
                </Router>
              </FlashcardsState>
            </PomodoroState>
          </TodoState>
        </EventState>
      </AlertState>
    </AuthState>
  );
};

export default App;
