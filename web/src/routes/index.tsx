import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Teachers from '../containers/Teachers';
import TeachersForm from '../containers/TeachersForm';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/study' component={Teachers} />
				<Route path='/give-classes' component={TeachersForm} />
				<Route path='/' component={Home} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
