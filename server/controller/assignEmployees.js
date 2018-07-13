// Model
const AssignEmployee = require('../models/AssignEmployee');

// Validations
const validateAssignEmployeeInput = require('../validations/AssignEmployee');

module.exports = {
  assignEmployees: async (req, res) => {
    // ERRORS
    const {
      errors,
      isValid,
    } = validateAssignEmployeeInput(req.body);
    try {
      // If errors
      if (!isValid) {
        return res.status(400).json(errors);
      }

      const newId = req.body.employeeId.split(',').map(id => id.trim());

      const addSelected = await new AssignEmployee({
        employeeId: newId,
      }).save();
      return res.json(addSelected);
    } catch (err) {
      errors.assignEmployees = 'Unable to assign employees! try again';
      return res.status(404).json(errors);
    }
  },

  getAssignEmployees: async (req, res) => {
    const errors = {};
    try {
      const assignEmployees = await AssignEmployee.find().sort({ _id: -1 });
      return res.json(assignEmployees);
    } catch (err) {
      errors.getAssignEmployees = 'Unable to fetch employees';
      return res.status(404).json(errors);
    }
  },
};
