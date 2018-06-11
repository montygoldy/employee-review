import React, { Component } from "react";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class EmployeeTable extends Component {
  state = {
    isEdit: {}
  };

  editEmployee = index => {
    const isEdit = {
      ...this.state.isEdit,
      [index]: true
    };

    this.setState({
      isEdit
    });
  };
  render() {
    const employeeInfo = this.props.employees.map(employee => (
      <tr key={employee.employeeId} className="employee_heading">
        <td>{employee.name}</td>
        <td>{employee.employeeId}</td>
        <td>{employee.title}</td>
        <td>{employee.dateOfJoining}</td>
        <td>{employee.funFact}</td>
        <td className="actions">
          <div className="group">
            <Link to={`/review/${employee.employeeId}`}>
              <i className="fas fa-eye" />
            </Link>
            <button
              className="edit"
              onClick={() => this.editEmployee(employee.employeeId)}
            >
              <i className="fas fa-pencil-alt" />
            </button>
            {this.state.isEdit[employee.employeeId] && (
              <EditEmployeeModal employee={employee.name} />
            )}

            <button
              onClick={() => this.props.deleteEmployee(employee.employeeId)}
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Id</th>
            <th>Job Title</th>
            <th>Date Of Joining</th>
            <th>Employee Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{employeeInfo}</tbody>
      </table>
    );
  }
}

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
  deleteEmployee: PropTypes.func.isRequired
};

export default EmployeeTable;
