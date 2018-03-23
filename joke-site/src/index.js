import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducer from './Redux/reducers';

import Header from './Header/header';
import SignUp from './Register/register';
import Login from './Login/login';
import Logout from './Logout/logout';
import DisplayJokes from './DisplayJokes/displayJokes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// ────────────────────────────────────────────────────────────────────────────────
//
// ─── FOR COMMENTS ───────────────────────────────────────────────────────────────
// alt+shift+y | alt+y | alt+m | alt+l | alt+shift+b (for box comment)
//
// ────────────────────────────────────────────────────────────────────────────────

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Header} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/jokes" component={DisplayJokes} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
//<Route path="/jokes" component={RequireAuth(DisplayJokes)} />
