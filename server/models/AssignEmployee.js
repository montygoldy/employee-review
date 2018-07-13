const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

// Create Schema
const AssignEmployeeSchema = new Schema({
  employeeId: {
    type: [String],
  },
});

// Create model
const assignEmployees = mongoose.model('assignEmployees', AssignEmployeeSchema);

module.exports = assignEmployees;
