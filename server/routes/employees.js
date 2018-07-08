const express = require('express');
const passport = require('passport');

const EmployeeController = require('../controller/employees');

const passportJWT = passport.authenticate('jwt', {
  session: false,
});

const router = express.Router();


// @route  GET @api/employess
// @desc   Get all employee route
// @access PRIVATE
router.get('/', passportJWT, EmployeeController.getAllEmployees);

// @route  GET @api/employess/:id
// @desc   Get employee by id route
// @access PRIVATE
router.get('/:employeeId', passportJWT, EmployeeController.getEmployeeById);

// @route  POST @api/employess/
// @desc   Add employee route
// @access PRIVATE
router.post('/', passportJWT, EmployeeController.addEmployee);

// @route  PUT @api/employess/:id
// @desc   EDIT employee route
// @access PRIVATE
router.put('/:employeeId', passportJWT, EmployeeController.editEmployee);

// @route  DELETE @api/employess/:id
// @desc   Delete employee route
// @access PRIVATE
router.delete('/:employeeId', passportJWT, EmployeeController.deleteEmployee);

module.exports = router;
