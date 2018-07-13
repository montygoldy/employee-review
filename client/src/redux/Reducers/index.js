import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import feedbackReducer from "./feedbackReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { LOGOUT_USER } from "../Actions/types";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  employee: employeeReducer,
  feedback: feedbackReducer,
  auth: authReducer,
  errors: errorReducer
});

export default (state, action) => {
  if (action.type === LOGOUT_USER) {
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });
    state = {};
  }
  return appReducer(state, action);
};
