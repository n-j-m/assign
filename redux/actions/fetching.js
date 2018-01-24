export const FETCHING = 'FETCHING';

export function fetching(isFetching) {
  return { type: FETCHING, payload: isFetching };
}
