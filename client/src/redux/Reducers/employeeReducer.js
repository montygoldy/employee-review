import {
  GET_EMPLOYEES,
  EMPLOYEES_LOADING,
  ADD_EMPLOYEE,
  GET_EMPLOYEE,
  DELETE_EMPLOYEE
} from "../Actions/types";

const initialState = {
  loading: false,
  employees: [],
  employee: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loading: false
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
        loading: false
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [action.payload, ...state.employees],
        loading: false
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.id !== action.payload
        ),
        loading: false
      };
    default:
      return state;
  }
};