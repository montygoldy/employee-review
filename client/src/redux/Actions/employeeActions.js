import axios from "axios";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  EMPLOYEES_LOADING,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE
} from "./types";

//Add Employee
export const addEmployee = employeeData => dispatch => {
  dispatch({
    type: ADD_EMPLOYEE,
    payload: employeeData
  });
};

//Get Employees
export const getEmployees = () => dispatch => {
  dispatch({ type: EMPLOYEES_LOADING });
  axios
    .get("http://localhost:3004/employees")
    .then(response =>
      dispatch({
        type: GET_EMPLOYEES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

//Get Employee details
export const getEmployeeDetails = employeeId => dispatch => {
  dispatch({ type: EMPLOYEES_LOADING });
  axios
    .get(`http://localhost:3004/employees?employeeId=${employeeId}`)
    .then(response =>
      dispatch({
        type: GET_EMPLOYEE,
        payload: response.data[0]
      })
    );
};

//Delete Employee
export const deleteEmployee = employeeId => dispatch => {
  dispatch({
    type: DELETE_EMPLOYEE,
    payload: employeeId
  });
};
