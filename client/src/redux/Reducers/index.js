import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import feedbackReducer from "./feedbackReducer";

export default combineReducers({
  employee: employeeReducer,
  feedback: feedbackReducer
});
