import axios from 'axios';
axios.defaults.withCredentials = true;

const ROOT_URL = 'http://localhost:5000';

export const REGISTER = 'REGISTER';
export const LOGGED_IN = 'LOGGED_IN';

// export const authError = error => {
//   return {
//     type: AUTHENTICATION_ERROR,
//     payload: error
//   };
// };

export const registerzzz = (username, password, history) => {
  return dispatch => {
    // if (password !== confirmPassword) {
    //   dispatch(authError('Passwords do not match'));
    //   return;
    // }
    axios
      .post(`${ROOT_URL}/api/login`, { username, password })
      .then(res => {
        dispatch({
          type: REGISTER,
        });
        history.push('/login');
      })
      .catch(() => {
        console.log('Failed to Register');
        // dispatch(authError('Failed to register user'));
      });
  };
};
