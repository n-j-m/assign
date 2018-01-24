import { asyncAction } from './async';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

/**
 * Creates the login action with the give user object.
 *
 * @param {Object} user An object representing the newly logged in user.
 */
export function loggedIn(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

/**
 * Creates the logout action.
 */
export function logout() {
  return { type: LOGOUT };
}

/**
 * Creates a function that accepts user credentials,
 * calls the login service on the API object, and
 * dispatches the logged in action if successful.
 *
 * @param {Object} api An API object containing the login function
 */
export function createLoginAction({ login }) {
  return creds =>
    asyncAction(dispatch => {
      return login(creds).then(user => dispatch(loggedIn(user)));
    });
}
