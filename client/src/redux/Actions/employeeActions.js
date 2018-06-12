import axios from "axios";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  EMPLOYEES_LOADING,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE
} from "./types";

//Add Employee
export const addEmployee = employeeData => dispatch => {
  axios
    .post(
      "http://localhost:3004/employees",
      employeeData, //data
      { headers: { "Content-Type": "application/json" } } //config
    )
    .then(response =>
      dispatch({
        type: ADD_EMPLOYEE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
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

//Edit and Update Employee details
export const updateEmployee = newEmployeeData => dispatch => {
  axios
    .put(
      `http://localhost:3004/employees/${newEmployeeData.id}`,
      newEmployeeData,
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(response =>
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

//Delete Employee
export const deleteEmployee = employeeId => dispatch => {
  axios
    .delete(`http://localhost:3004/employees?employeeId=${employeeId}`, {
      headers: { "Content-Type": "application/json" }
    })
    .then(
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: employeeId
      })
    )
    .catch(err => console.log(err));
};
