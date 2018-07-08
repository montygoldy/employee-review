import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../Actions/types";
import api from "../../Api";
import * as actions from "../Actions/authActions";
import { getFeedbacksRequest } from "../Actions/feedbackActions";
import history from "../../components/Routes/History";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

function* registerSaga(action) {
  try {
    const user = yield call(api.auth.register, action.payload);
    yield put(actions.registerUser(user));
    history.push("/login");
  } catch (err) {
    yield put(actions.registerUserErrors(err.response.data));
  }
}

function* loginSaga(action) {
  try {
    const userData = yield call(api.auth.login, action.payload);
    yield put(actions.loginUser(userData));

    //Save to localstorage
    localStorage.setItem("jwtToken", userData.token);
    //Set token to auth header
    setAuthToken(userData.token);
    //Decode token to get userData
    const decoded = jwt_decode(userData.token);
    //Set Current User
    yield put(actions.setCurrentUser(decoded));
    yield call(getFeedbacksRequest());
    history.push("/review");
  } catch (err) {
    yield put(actions.loginUserErrors(err.response.data));
  }
}

function* logoutSaga(action) {
  try {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header
    setAuthToken(false);
    // Set the current User to emply opbject which will also set isAuthenticated to false
    yield put(actions.setCurrentUser({}));
  } catch (err) {
    yield put(actions.logoutUserErrors(err.response.data));
  }
}

function* getUsersSaga(action) {
  try {
    const data = yield call(api.auth.getUsers);
    yield put(actions.getUsers(data));
  } catch (err) {
    yield put(actions.getUsersErrors(err.response.data));
  }
}

export function* authSaga() {
  yield takeLatest(actionTypes.REGISTER_USER_REQUEST, registerSaga);
  yield takeLatest(actionTypes.LOGIN_USER_REQUEST, loginSaga);
  yield takeLatest(actionTypes.LOGOUT_USER, logoutSaga);
  yield takeLatest(actionTypes.GET_USERS_REQUEST, getUsersSaga);
}
