import { combineReducers } from 'redux';
import animals from './animalReducer';
import requestCallsInProgress from './requestStatusReducer';

const rootReducer = combineReducers({
  animals,
  requestCallsInProgress,
});

export default rootReducer;

