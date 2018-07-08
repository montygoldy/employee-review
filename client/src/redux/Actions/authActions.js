import * as actionTypes from "./types";

// Register user
export const registerUserRequest = userData => ({
  type: actionTypes.REGISTER_USER_REQUEST,
  payload: userData
});

export const registerUser = userData => ({
  type: actionTypes.REGISTER_USER,
  payload: userData
});

export const registerUserErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Complete login user
export const loginUserRequest = userData => ({
  type: actionTypes.LOGIN_USER_REQUEST,
  payload: userData
});

export const loginUser = userData => ({
  type: actionTypes.LOGIN_USER,
  payload: userData
});

export const loginUserErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Set logged in User
export const setCurrentUser = decoded => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: decoded
});

// Logout User
export const logoutUser = () => ({
  type: actionTypes.LOGOUT_USER
});

export const logoutUserErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

export const getUsersRequest = () => ({
  type: actionTypes.GET_USERS_REQUEST
});

export const getUsers = data => ({
  type: actionTypes.GET_USERS,
  payload: data
});

export const getUsersErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});
