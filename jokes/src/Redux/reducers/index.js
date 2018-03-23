import { LOGGED_IN } from '../actions';
import { reducer as FormReducer } from 'redux-form';

const initialState = {
  jokes: [],
  auth: { authenticated: false },
  form: FormReducer,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, auth: { authenticated: true } };
    default:
      return state;
  }
};

export default reducer;
