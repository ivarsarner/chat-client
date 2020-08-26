import { combineReducers } from 'redux';
import { chatReducer } from './chat';

const reducers = combineReducers({
  chatReducer,
});

export default reducers;
