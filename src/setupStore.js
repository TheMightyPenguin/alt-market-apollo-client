/* @flow */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './combinedReducers';

export const setupStore = () => {
  const middlewares = [thunk];

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

export default setupStore;

const a = 2;

const x = (a: string) => a + 'as';

x(2);
