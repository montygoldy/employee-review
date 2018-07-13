import * as actionTypes from "./types";

//Assign Employees
export const assignEmployeesRequest = data => ({
  type: actionTypes.ASSIGN_EMPLOYEES_REQUEST,
  payload: data
});

export const assignEmployees = selectedEmployees => ({
  type: actionTypes.ASSIGN_EMPLOYEES,
  payload: selectedEmployees
});

export const assignEmployeesErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

// Get Assign Employees
export const getAssignEmployeesRequest = () => ({
  type: actionTypes.GET_ASSIGN_EMPLOYEES_REQUEST
});

export const getAssignEmployees = selectedIds => ({
  type: actionTypes.GET_ASSIGN_EMPLOYEES,
  payload: selectedIds
});

export const getAssignEmployeesErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Add Employee
export const addEmployeeRequest = data => ({
  type: actionTypes.ADD_EMPLOYEE_REQUEST,
  payload: data
});

export const addEmployee = employeeData => ({
  type: actionTypes.ADD_EMPLOYEE,
  payload: employeeData
});

export const addEmployeeErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Get Employees
export const getEmployeesRequest = () => ({
  type: actionTypes.GET_EMPLOYEES_REQUEST
});

export const getEmployees = employeesData => ({
  type: actionTypes.GET_EMPLOYEES,
  payload: employeesData
});

export const getEmployeesErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Get Employee details
export const getEmployeeDetailsRequest = employeeId => ({
  type: actionTypes.GET_EMPLOYEE_REQUEST,
  payload: employeeId
});

export const getEmployeeDetails = employeesData => ({
  type: actionTypes.GET_EMPLOYEE,
  payload: employeesData
});

export const getEmployeeDetailsErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Edit and Update Employee details
export const updateEmployeeRequest = newData => ({
  type: actionTypes.UPDATE_EMPLOYEE_REQUEST,
  payload: newData
});

export const updateEmployee = employeesData => ({
  type: actionTypes.UPDATE_EMPLOYEE,
  payload: employeesData
});

export const updateEmployeeErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Delete Employee
export const deleteEmployeeRequest = employeeId => ({
  type: actionTypes.DELETE_EMPLOYEE_REQUEST,
  payload: employeeId
});

export const deleteEmployee = employeeId => ({
  type: actionTypes.DELETE_EMPLOYEE,
  payload: employeeId
});

export const deleteEmployeeErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});
