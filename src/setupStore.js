import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './combinedReducers';


export const setupStore = () => {
  const middlewares = [thunk];

  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ));

  return store;
};

export default setupStore;
