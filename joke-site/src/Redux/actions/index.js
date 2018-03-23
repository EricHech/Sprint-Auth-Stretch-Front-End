import axios from 'axios';
axios.defaults.withCredentials = true;

const ROOT_URL = 'http://localhost:5000';

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const REGISTER = 'REGISTER';
export const LOGGED_IN = 'LOGGED_IN';
export const GET_JOKES = 'GET_JOKES';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error,
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/api/users`, { username, password })
      .then(res => {
        if (res.data.err.message) {
          dispatch(authError(res.data.err.message));
          return;
        }
        dispatch({
          type: REGISTER,
        });
        history.push('/login');
      })
      .catch(err => {
        console.log(err);
        //dispatch(authError(err));
      });
  };
};
