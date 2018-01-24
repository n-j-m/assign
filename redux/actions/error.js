export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export function clearError() {
  return { type: CLEAR_ERROR };
}

export function error(err) {
  return { type: ERROR, error: true, payload: err };
}
