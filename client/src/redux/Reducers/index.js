import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import feedbackReducer from "./feedbackReducer";
import authReducer from "./authReducer";

export default combineReducers({
  employee: employeeReducer,
  feedback: feedbackReducer,
  auth: authReducer
});
