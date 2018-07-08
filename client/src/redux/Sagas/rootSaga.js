import { employeeSaga } from "./employeeSaga";
import { feedbackSaga } from "./feedbackSaga";
import { authSaga } from "./authSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(employeeSaga), fork(feedbackSaga), fork(authSaga)]);
}
