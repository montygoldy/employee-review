import { employeeSaga } from "./employeeSaga";
import { feedbackSaga } from "./feedbackSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(employeeSaga), fork(feedbackSaga)]);
}
