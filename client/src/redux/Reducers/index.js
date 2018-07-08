import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import feedbackReducer from "./feedbackReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  employee: employeeReducer,
  feedback: feedbackReducer,
  auth: authReducer,
  errors: errorReducer
});
