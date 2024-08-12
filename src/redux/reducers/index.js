import changeTheNumber from "./reducer";
import { combineReducers } from "redux";

// Create a Redux store with the given reducer

const rootReducer = combineReducers({
  changeTheNumber, // Replace with your reducer function
});

export default rootReducer;
