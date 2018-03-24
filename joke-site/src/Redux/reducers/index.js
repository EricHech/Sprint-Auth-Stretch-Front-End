import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import {
  AUTHENTICATION_ERROR,
  REGISTER,
  LOGIN,
  LOGOUT,
  GET_JOKES,
} from '../actions';

const authenticationState = {
  authenticated: false,
};

const AuthReducer = (state = authenticationState, action) => {
  switch (action.type) {
    case AUTHENTICATION_ERROR:
      return { ...state, message: action.payload };
    case REGISTER:
      return { ...state, message: 'Registered' };
    case LOGIN:
      return { ...state, authenticated: true };
    case LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

const JokeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_JOKES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: AuthReducer,
  jokes: JokeReducer,
  form: FormReducer,
});

export default rootReducer;
