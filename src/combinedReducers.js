import { combineReducers } from 'redux';
import reducers from './common/reducers';

export const reducer = combineReducers({
  ...reducers
});

export default reducer;
