import { call, put } from "redux-saga/effects";
import api from "../../Api";
import { addEmployee } from "../Actions/employeeActions";

export function* addEmployeeSaga(action) {
  const employee = yield call(api.employee.add, action.payload);
  yield put(addEmployee(employee));
}
