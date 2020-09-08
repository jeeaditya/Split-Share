import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AlertState from './context/alert/alertState';
//import PrivateRoute from './components/routing/PrivateRoute';
import AuthState from './context/auth/authState';

import './App.css';

const App = () => {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Alerts />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/register' component={Register} />
								<Route exact path='/login' component={Login} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertState>
		</AuthState>
	);
};

export default App;
