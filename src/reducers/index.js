import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import ActiveUser from "./reducer_active_user";

const rootReducer = combineReducers({
  users: UserReducer,
  activeUser: ActiveUser
});

export default rootReducer;

// Mapping is done by combineReducers

// Wiring of reducer which will produce users objects