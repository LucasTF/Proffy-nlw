import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Teachers from '../containers/Teachers';
import TeachersForm from '../containers/TeachersForm';
import Login from '../containers/Login';
import Register from '../containers/Register';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/study' component={Teachers} />
				<Route path='/give-classes' component={TeachersForm} />
				<Route path='/home' component={Home} />
				<Route path='/register' component={Register} />
				<Route path='/' component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
