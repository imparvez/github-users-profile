import { combineReducers } from 'redux';
import UserReducer from './reducer_users';

const rootReducer = combineReducers({
  users: UserReducer
});

export default rootReducer;

// Mapping is done by combineReducers

// Wiring of reducer which will produce users objects