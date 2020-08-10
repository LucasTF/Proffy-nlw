import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../containers/Register';
import Login from '../containers/Login';

const AuthRoutes: React.FC = () => {
	return (
		<Switch>
			<Route path='/register' component={Register} />
			<Route path='/' component={Login} />
		</Switch>
	);
};

export default AuthRoutes;
