import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventState from './context/events/EventState';
import TodoState from './context/todo/TodoState';
import PomodoroState from './context/pomodoroTimer/PomodoroState';
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

const App = () => {
	//Single page application switcher for each page in the application
	return (
		<EventState>
			<TodoState>
				<PomodoroState>
					<FlashcardsState>
						<Router>
							<Fragment>
								<Switch>
									<Route exact path='/'>
										<Landing />
									</Route>
									<Route exact path='/Signin'>
										<SignIn />
									</Route>
									<Route exact path='/Signup'>
										<SignUp />
									</Route>
									<Route exact path='/Calendar'>
										<Calendar />
									</Route>
									<Route exact path='/Flashcards'>
										<Flashcards />
									</Route>
									<Route exact path='/PomodoroTimer'>
										<PomodoroTimer />
									</Route>
									<Route exact path='/Todos'>
										<Todos />
									</Route>
									<Route exact path='/UserHome'>
										<UserHome />
									</Route>
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
	);
};

export default App;
