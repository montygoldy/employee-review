import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../Actions/types";
import api from "../../Api";
import * as actions from "../Actions/feedbackActions";
import history from "../../components/Routes/History";

function* addFeedbackSaga(action) {
  try {
    const feedback = yield call(api.feedback.add, action.payload);
    yield put(actions.addFeedback(feedback));
    history.push("/review");
  } catch (err) {
    yield put(actions.addFeedbackErrors(err.response.data));
  }
}

function* getFeedbacksSaga() {
  try {
    const feedbacks = yield call(api.feedback.all);
    yield put(actions.getFeedbacks(feedbacks));
  } catch (err) {
    yield put(actions.getFeedbacksErrors(err.response.data));
  }
}

function* updateFeedbackSaga(action) {
  try {
    const updateData = yield call(api.feedback.edit, action.payload);
    yield put(actions.updateFeedback(updateData));
    console.log(updateData);
  } catch (err) {
    yield put(actions.updateFeedbackErrors(err.response.data));
  }
}

function* getFeedbackSaga(action) {
  try {
    const feedback = yield call(api.feedback.feedbackInfo, action.payload);
    yield put(actions.getFeedback(feedback));
  } catch (err) {
    yield put(actions.getFeedbackErrors(err.response.data));
  }
}

export function* feedbackSaga() {
  yield takeLatest(actionTypes.ADD_FEEDBACK_REQUEST, addFeedbackSaga);
  yield takeLatest(actionTypes.GET_FEEDBACKS_REQUEST, getFeedbacksSaga);
  yield takeLatest(actionTypes.UPDATE_FEEDBACK_REQUEST, updateFeedbackSaga);
  yield takeLatest(actionTypes.GET_FEEDBACK_REQUEST, getFeedbackSaga);
}
