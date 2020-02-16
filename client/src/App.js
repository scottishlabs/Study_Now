import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Calendar } from './pages';

const App = () => {
	return (
		// <Router>
		// 	<Fragment>
		// 		<Switch>
		//       <Route exact path='/'/>
		//       <Route exact path='/todos'/>
		//     </Switch>
		// 	</Fragment>
		// </Router>
		<Fragment>
			<Calendar />
		</Fragment>
	);
};

export default App;
