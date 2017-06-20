import { combineReducers } from 'redux';

import fruit from './fruitReducer';

// 1. import your snackReducer

const rootReducer = combineReducers({
  fruit
  // 2. add snacks as a new slice of state for your app
});

export default rootReducer;
