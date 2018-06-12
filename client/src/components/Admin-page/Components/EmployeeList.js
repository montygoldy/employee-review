import React from "react";
import PropTypes from "prop-types";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employees }) => {
  const employeeInfo = employees.map(employee => (
    <EmployeeItem
      key={employee.id}
      name={employee.name}
      title={employee.title}
      dateOfJoining={employee.dateOfJoining}
      employeeId={employee.employeeId}
      funFact={employee.funFact}
      id={employee.id}
      image={employee.image}
    />
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
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeList;
