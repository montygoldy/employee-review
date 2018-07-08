const Validator = require('validator');
const isEmpty = require('../helpers/isEmpty');


const validateFeedbackInput = (data) => {
  const errors = {};
  data.pro = !isEmpty(data.pro) ? data.pro : '';
  data.con = !isEmpty(data.con) ? data.con : '';
  data.comments = !isEmpty(data.comments) ? data.comments : '';
  data.rating = !isEmpty(data.rating) ? data.rating : '';

  if (Validator.isEmpty(data.pro)) {
    errors.pro = 'Pro field is required';
  }

  if (Validator.isEmpty(data.con)) {
    errors.con = 'Con field is required';
  }

  if (Validator.isEmpty(data.comments)) {
    errors.comments = 'Comments field is required';
  }

  if (Validator.isEmpty(data.rating)) {
    errors.rating = 'Rating field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = validateFeedbackInput;
