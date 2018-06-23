import * as actionTypes from "../Actions/types";

const initialState = {
  loading: false,
  employees: [],
  employee: {},
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loading: false
      };
    case actionTypes.GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
        loading: false
      };
    case actionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [action.payload, ...state.employees],
        loading: false
      };
    case actionTypes.ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(
          employee =>
            employee.id === action.payload.id ? action.payload : employee
        )
      };
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.employeeId !== action.payload
        ),
        loading: false
      };
    default:
      return state;
  }
};
