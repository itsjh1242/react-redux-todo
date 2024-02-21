import { combineReducers } from "redux";
// counter
import counter from "./counter";

// Root Reducer
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
