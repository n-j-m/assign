import { LOGIN, LOGOUT } from '../actions';

export function user(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
