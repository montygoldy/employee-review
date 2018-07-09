const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

// Create Schema
const EmployeeSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  funFact: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  dateOfJoining: {
    type: Date,
    required: true,
  },
});

// Create model
const employee = mongoose.model('employees', EmployeeSchema);

module.exports = employee;
