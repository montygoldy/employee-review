import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  EMPLOYEES_LOADING,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from "./types";
import api from "../../Api";

//Add Employee
export const addEmployee = employeeData => dispatch => {
  api.employee
    .add(employeeData)
    .then(data =>
      dispatch({
        type: ADD_EMPLOYEE,
        payload: data
      })
    )
    .catch(err => console.log(err));
};

//Get Employees
export const getEmployees = () => dispatch => {
  dispatch({ type: EMPLOYEES_LOADING });
  api.employee
    .all()
    .then(data =>
      dispatch({
        type: GET_EMPLOYEES,
        payload: data
      })
    )
    .catch(err => console.log(err));
};

//Get Employee details
export const getEmployeeDetails = employeeId => dispatch => {
  dispatch({ type: EMPLOYEES_LOADING });
  api.employee
    .getInfo(employeeId)
    .then(data =>
      dispatch({
        type: GET_EMPLOYEE,
        payload: data
      })
    )
    .catch(err => console.log(err));
};

//Edit and Update Employee details
export const updateEmployee = newEmployeeData => dispatch => {
  api.employee
    .edit(newEmployeeData)
    .then(data =>
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: data
      })
    )
    .catch(err => console.log(err));
};

//Delete Employee
export const deleteEmployee = employeeId => dispatch => {
  api.employee
    .delete(employeeId)
    .then(
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: employeeId
      })
    )
    .catch(err => console.log(err));
};
