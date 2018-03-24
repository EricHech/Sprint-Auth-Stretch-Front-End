import axios from 'axios';
axios.defaults.withCredentials = true;

const ROOT_URL = 'http://localhost:5000';

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_JOKES = 'GET_JOKES';

export const authError = error => {
  if (error)
    return {
      type: AUTHENTICATION_ERROR,
      payload: error,
    };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Your passwords must match each other.'));
      return;
    }
    axios
      .post(`${ROOT_URL}/api/users`, { username, password })
      .then(res => {
        dispatch({ type: REGISTER });
        history.push('/login');
      })
      .catch(err => {
        if (err.response.data.err.message)
          dispatch(authError('Your username must be a valid email address.'));
        if (err.response.data.err.errmsg)
          dispatch(authError('The username is already taken.'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/api/login`, { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN });
        history.push('/jokes');
      })
      .catch(err => {
        if (err.response.data.error)
          dispatch(authError('Username/Password invalid.'));
      });
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT };
};

export const getJokes = () => {
  const headers = { Authorization: localStorage.getItem('token') };
  return dispatch => {
    axios
      .get(`${ROOT_URL}/api/jokes`, { headers })
      .then(res => {
        dispatch({
          type: GET_JOKES,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch(authError('Error getting jokes.'));
      });
  };
};

export const checkLogin = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { type: LOGIN };
  } else {
    return { type: LOGOUT };
  }
};
