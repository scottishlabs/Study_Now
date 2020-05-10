import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthState from './context/auth/AuthState';
import EventState from './context/events/EventState';
import TodoState from './context/todo/TodoState';
import PomodoroState from './context/pomodoroTimer/PomodoroState';
import AlertState from './context/alert/AlertState';
import FlashcardsState from './context/flashcards/FlashcardsState';

import Landing from './components/pages/LandingArea/Landing';
import Calendar from './components/pages/UserArea/Calendar';
import SignIn from './components/pages/LandingArea/SignIn';
import SignUp from './components/pages/LandingArea/SignUp';
import Flashcards from './components/pages/UserArea/Flashcards';
import PomodoroTimer from './components/pages/UserArea/PomodoroTimer';
import UserHome from './components/pages/UserArea/UserHome';
import Todos from './components/pages/UserArea/Todos';
import PageNotFound from './components/pages/PageNotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import Alerts from './components/layout/Alerts';

import './App.css';

const App = () => {
	//Single page application switcher for each page in the application
	return (
		<AuthState>
			<AlertState>
				<EventState>
					<TodoState>
						<PomodoroState>
							<FlashcardsState>
								<Router>
									<Fragment>
										<Switch>
											<Route exact path='/' component={Landing} />
											<Route exact path='/Signin' component={SignIn} />
											<Route exact path='/Signup' component={SignUp} />
											<PrivateRoute
												exact
												path='/Calendar'
												component={Calendar}
											/>
											<PrivateRoute
												exact
												path='/Flashcards'
												component={Flashcards}
											/>
											<PrivateRoute
												exact
												path='/PomodoroTimer'
												component={PomodoroTimer}
											/>
											<PrivateRoute exact path='/Todos' component={Todos} />
											<PrivateRoute
												exact
												path='/UserHome'
												component={UserHome}
											/>
											<Route>
												<PageNotFound />
											</Route>
										</Switch>
									</Fragment>
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
