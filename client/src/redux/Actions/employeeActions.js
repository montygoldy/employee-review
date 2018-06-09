import axios from "axios";
import {
  GET_EMPLOYEES,
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
  axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>
    dispatch({
      type: GET_EMPLOYEES,
      payload: response.data
    })
  );
};
