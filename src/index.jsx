import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import { employeesReducer } from './reducer';

import { EmployeesList } from './screens/employees-list';

import reportWebVitals from './reportWebVitals';

const composedEnhancer = composeWithDevTools(applyMiddleware(promiseMiddleware));
const rootReducer = combineReducers({employees: employeesReducer})

const store = createStore(rootReducer, {}, composedEnhancer);
const My404Component = () => <div> not found </div>;
render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>

					<Route exact path="/">
						<EmployeesList />
					</Route>

					<Route path="/404" component={My404Component} />
					<Redirect from="*" to="/404" />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
