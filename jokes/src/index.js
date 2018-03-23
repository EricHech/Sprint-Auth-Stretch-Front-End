import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { reducer } from './Redux/reducers'

import Header from './Header/header';
import './Header/header.css';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Header} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// <Route path="/register" component={App} />
// <Route path="/login" component={App} />
// <Route path="/logout" component={App} />
// <Route path="/jokes" component={RequireAuth(App)} />
