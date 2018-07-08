// Model
const Employee = require('../models/Employee');

// Validations
const validateEmployeeInput = require('../validations/Employee');

module.exports = {
  getAllEmployees: async (req, res) => {
    const errors = {};
    try {
      const employees = await Employee.find().sort({
        _id: -1,
      });
      return res.json(employees);
    } catch (error) {
      errors.noEmployees = 'No employees found';
      return res.status(404).json(errors);
    }
  },

  getEmployeeById: async (req, res) => {
    const errors = {};

    try {
      const employee = await Employee.findOne({
        employeeId: req.params.employeeId,
      });

      if (!employee) {
        errors.employee = `No employee found for ${req.params.employeeId}`;
        return res.status(404).json(errors);
      }

      return res.json(employee);
    } catch (err) {
      errors.employee = `No employee found for ${req.params.employeeId}`;
      return res.status(404).json(errors);
    }
  },

  addEmployee: async (req, res) => {
    // ERRORS
    const {
      errors,
      isValid,
    } = validateEmployeeInput(req.body);
    try {
      // If errors
      if (!isValid) {
        res.status(400).json(errors);
      }

      // Get Fields and creating a json object
      const employeeFields = {};
      if (req.body.employeeId) employeeFields.employeeId = req.body.employeeId;
      if (req.body.name) employeeFields.name = req.body.name;
      if (req.body.title) employeeFields.title = req.body.title;
      if (req.body.funFact) employeeFields.funFact = req.body.funFact;
      if (req.body.image) employeeFields.image = req.body.image;
      if (req.body.dateOfJoining) employeeFields.dateOfJoining = req.body.dateOfJoining;

      // Check employee if exists
      let employee = await Employee.findOne({
        employeeId: req.body.employeeId,
      });

      if (employee) {
        errors.foundEmployee = `Employee with ${req.body.employeeId} id is already there`;
        return res.status(404).json(errors);
      }

      // Create a new employee
      // Check employeeId
      employee = await new Employee(employeeFields).save();
      return res.json(employee);
    } catch (err) {
      errors.addError = 'Unable to add employee try again';
      return res.status(404).json(errors);
    }
  },

  editEmployee: async (req, res) => {
    const errors = {};
    try {
      let employee = await Employee.findOne({
        employeeId: req.params.employeeId,
      });

      if (!employee) {
        errors.noEmployee = `Cannot find employee with this ${req.params.employeeId} id`;
      }

      // Edit if true
      // Get Fields and creating a json object
      const employeeFields = {};
      if (req.body.employeeId) employeeFields.employeeId = req.body.employeeId;
      if (req.body.name) employeeFields.name = req.body.name;
      if (req.body.title) employeeFields.title = req.body.title;
      if (req.body.funFact) employeeFields.funFact = req.body.funFact;
      if (req.body.image) employeeFields.image = req.body.image;
      if (req.body.dateOfJoining) employeeFields.dateOfJoining = req.body.dateOfJoining;

      employee = await Employee.findOneAndUpdate({
        employeeId: req.params.employeeId,
      }, {
        $set: employeeFields,
      }, {
        new: true,
      });
      return res.json(employee);
    } catch (err) {
      errors.editError = 'Unable to edit employee try again';
      return res.status(404).json(errors);
    }
  },

  deleteEmployee: async (req, res) => {
    const errors = {};
    try {
      await Employee.findOneAndRemove({
        employeeId: req.params.employeeId,
      });
      return res.json({
        success: true,
      });
    } catch (err) {
      errors.noEmployee = `No employee found for ${req.params.employeeId}`;
      return res.status(404).json(errors);
    }
  },
};
