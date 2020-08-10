import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TeachersForm from '../containers/TeachersForm';
import Teachers from '../containers/Teachers';
import Home from '../containers/Home';

const AppRoutes: React.FC = () => {
	return (
		<Switch>
			<Route path='/study' component={Teachers} />
			<Route path='/give-classes' component={TeachersForm} />
			<Route path='/' component={Home} />
		</Switch>
	);
};

export default AppRoutes;
