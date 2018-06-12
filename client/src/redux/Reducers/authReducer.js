import { SET_CURRENT_USER, GET_USERS } from "../Actions/types";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  users: [],
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
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
