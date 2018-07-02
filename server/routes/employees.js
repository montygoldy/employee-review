const express = require('express');
const passport = require('passport');

const EmployeeController = require('../controller/employees');

const router = express.Router();


// @route  GET @api/employess
// @desc   Get all employee route
// @access PRIVATE
router.get('/', EmployeeController.getAllEmployees);

// @route  GET @api/employess/:id
// @desc   Get employee by id route
// @access PRIVATE
router.get('/:employeeId', EmployeeController.getEmployeeById);

// @route  POST @api/employess/
// @desc   Add employee route
// @access PRIVATE
router.post('/', EmployeeController.addEmployee);

// @route  PUT @api/employess/:id
// @desc   EDIT employee route
// @access PRIVATE
router.put('/:employeeId', EmployeeController.editEmployee);

// @route  DELETE @api/employess/:id
// @desc   Delete employee route
// @access PRIVATE
router.delete('/:employeeId', EmployeeController.deleteEmployee);

module.exports = router;
