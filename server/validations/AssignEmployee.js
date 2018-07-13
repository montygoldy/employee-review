const Validator = require('validator');
const isEmpty = require('../helpers/isEmpty');

const validateAssignEmployeeInput = (data) => {
  const errors = {};
  data.employeeId = !isEmpty(data.employeeId) ? data.employeeId : '';

  if (Validator.isEmpty(data.employeeId)) {
    errors.employeeId = 'Please add employee';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateAssignEmployeeInput;
