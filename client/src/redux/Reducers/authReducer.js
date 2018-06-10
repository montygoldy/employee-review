import { SET_CURRENT_USER } from "../Actions/types";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        isAdmin: action.payload,
        user: action.payload
      };
    default:
      return state;
  }
};
