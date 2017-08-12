import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  test: (state, action) => 1
});

export const setupStore = () => {
  const middlewares = [thunk];

  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ));

  return store;
};

export default setupStore;
