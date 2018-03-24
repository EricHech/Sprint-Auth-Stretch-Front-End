import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import {
  AUTHENTICATION_ERROR,
  REGISTER,
  LOGIN,
  LOGOUT,
  GET_JOKES,
} from '../actions';

const AuthReducer = (auth = {}, action) => {
  switch (action.type) {
    case AUTHENTICATION_ERROR:
      return { ...auth, message: action.payload };
    case REGISTER:
      return { ...auth, message: 'Registered' };
    case LOGIN:
      return { ...auth, authenticated: true };
    case LOGOUT:
      return { ...auth, authenticated: false };
    default:
      return auth;
  }
};

const JokeReducer = (jokes = [], action) => {
  switch (action.type) {
    case GET_JOKES:
      return [...jokes, ...action.payload];
    default:
      return jokes;
  }
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  jokes: JokeReducer,
  form: FormReducer,
});

export default rootReducer;
