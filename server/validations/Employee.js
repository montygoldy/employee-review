const Validator = require('validator');
const isEmpty = require('../helpers/isEmpty');

const validateEmployeeInput = (data) => {
  const errors = {};
  data.employeeId = !isEmpty(data.employeeId) ? data.employeeId : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.title = !isEmpty(data.title) ? data.title : '';
  data.funFact = !isEmpty(data.funFact) ? data.funFact : '';
  data.dateOfJoining = !isEmpty(data.dateOfJoining) ? data.dateOfJoining : '';

  if (Validator.isEmpty(data.employeeId)) {
    errors.employeeId = 'EmployeeId is required';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }

  if (Validator.isEmpty(data.funFact)) {
    errors.funFact = 'Fun Fact field is required';
  }

  if (Validator.isEmpty(data.dateOfJoining)) {
    errors.dateOfJoining = 'Date of Joining field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateEmployeeInput;
