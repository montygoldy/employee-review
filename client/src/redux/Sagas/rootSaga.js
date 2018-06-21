import { takeLatest } from "redux-saga/effects";
import { ADD_EMPLOYEE_REQUEST } from "../Actions/types";
import { addEmployeeSaga } from "./employeeSaga";

export default function* rootSaga() {
  yield takeLatest(ADD_EMPLOYEE_REQUEST, addEmployeeSaga);
}
