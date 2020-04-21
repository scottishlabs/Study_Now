import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoState from './context/todo/TodoState';
import PomodoroState from './context/pomodoroTimer/PomodoroState';
import {
	Landing,
	Calendar,
	SignIn,
	SignUp,
	Flashcards,
	PomodoroTimer,
	UserHome,
	Todos,
} from './components';

const App = () => {
	//Single page application switcher for each page in the application
	return (
		<TodoState>
			<PomodoroState>
				<Router>
					<Fragment>
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route exact path='/Signin' component={SignIn} />
							<Route exact path='/Signup' component={SignUp} />
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
						</Switch>
					</Fragment>
				</Router>
			</PomodoroState>
		</TodoState>
	);
};

export default App;
