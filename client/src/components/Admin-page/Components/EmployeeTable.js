import React, { Component } from "react";

class EmployeeTable extends Component {
  render() {
    const employeeInfo = this.props.employees.map(employee => (
      <tr key={employee.employeeId}>
        <td>{employee.name}</td>
        <td>{employee.employeeId}</td>
        <td>{employee.title}</td>
        <td>{employee.dateOfJoining}</td>
        <td className="actions">
          <button>
            <i className="fas fa-pencil-alt" />
          </button>
          <button>
            <i className="fas fa-trash-alt" />
          </button>
        </td>
      </tr>
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>EmployeeId</th>
            <th>Job Title</th>
            <th>Date Of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{employeeInfo}</tbody>
      </table>
    );
  }
}

export default EmployeeTable;
