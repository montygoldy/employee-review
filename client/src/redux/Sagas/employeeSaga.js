import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../Actions/types";
import api from "../../Api";
import * as actions from "../Actions/employeeActions";

function* addEmployeeSaga(action) {
  try {
    const employee = yield call(api.employee.add, action.payload);
    yield put(actions.addEmployee(employee));
  } catch (err) {
    yield put(actions.addEmployeeErrors(err.response.data.errors));
  }
}

function* getEmployeesSaga(action) {
  try {
    const employees = yield call(api.employee.all);
    yield put(actions.getEmployees(employees));
  } catch (err) {
    yield put(actions.getEmployeesErrors(err.response.data.errors));
  }
}

function* getEmployeeDetailsSaga(action) {
  try {
    const employeeDetail = yield call(api.employee.getInfo, action.payload);
    yield put(actions.getEmployeeDetails(employeeDetail));
  } catch (err) {
    yield put(actions.getEmployeesErrors(err.response.data.errors));
  }
}

function* updateEmployeeSaga(action) {
  try {
    const updateData = yield call(api.employee.edit, action.payload);
    yield put(actions.updateEmployee(updateData));
  } catch (err) {
    yield put(actions.updateEmployeeErrors(err.response.data.errors));
  }
}

function* deleteEmployeeSaga(action) {
  try {
    const deleteEmployee = yield call(api.employee.delete, action.payload);
    yield put(actions.deleteEmployee(deleteEmployee));
  } catch (err) {
    yield put(actions.deleteEmployeeErrors(err.response.data.errors));
  }
}

export function* employeeSaga() {
  yield takeLatest(actionTypes.ADD_EMPLOYEE_REQUEST, addEmployeeSaga);
  yield takeLatest(actionTypes.GET_EMPLOYEES_REQUEST, getEmployeesSaga);
  yield takeLatest(actionTypes.GET_EMPLOYEE_REQUEST, getEmployeeDetailsSaga);
  yield takeLatest(actionTypes.UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga);
  yield takeLatest(actionTypes.DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga);
}
