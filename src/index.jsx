import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import { passesReducer } from './reducer';

import reportWebVitals from './reportWebVitals';

const composedEnhancer = composeWithDevTools(applyMiddleware(promiseMiddleware));
const rootReducer = combineReducers({passes: passesReducer})

const store = createStore(rootReducer, {}, composedEnhancer);
const My404Component = () => <div> not found </div>;
render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>

					<Route exact path="/">
						<div> hebaaa hello </div>
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
