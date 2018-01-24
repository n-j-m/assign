import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);

const defaultState = {
  fetching: false,
  error: null,
  user: null
};

export function initStore(initialState = defaultState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
