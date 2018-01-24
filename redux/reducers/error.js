import { ERROR, CLEAR_ERROR } from '../actions';

export function error(state = null, action) {
  switch (action.type) {
    case ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}
