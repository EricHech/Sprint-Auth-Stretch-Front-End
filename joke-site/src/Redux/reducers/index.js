import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import { AUTHENTICATION_ERROR, REGISTER, LOGGED_IN, GET_JOKES } from '../actions';

const AuthReducer = (state = { authenticated: false, message: '' }, action) => {
  switch (action.type) {
    case AUTHENTICATION_ERROR:
      return { ...state, message: action.payload };
    case REGISTER:
      return { ...state, message: 'Registered' };
    case LOGGED_IN:
      return { ...state, auth: { authenticated: true } };
    default:
      return state;
  }
};

const JokeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_JOKES:
      return state;
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
