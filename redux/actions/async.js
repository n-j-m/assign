import { fetching } from './fetching';

/**
 * Wraps the action in dispatches to fetching and error handling.
 * @param {Function} action The action to execute.
 */
export function asyncAction(action) {
  return async (dispatch, getState) => {
    dispatch(fetching(true));
    try {
      return await action(dispatch, getState);
    } catch (err) {
      dispatch(error(err));
    } finally {
      dispatch(fetching(false));
    }
  };
}
