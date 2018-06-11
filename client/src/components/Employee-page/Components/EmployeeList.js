import React from "react";
import EmployeeItem from "./EmployeeItem";
import PropTypes from "prop-types";

const EmployeeList = ({ employees }) => {
  return (
    <div className="article-group">
      {employees.map(employee => (
        <EmployeeItem
          key={employee.id}
          title={employee.title}
          name={employee.name}
          image={employee.image}
          funFact={employee.funFact}
          employeeId={employee.employeeId}
        />
      ))}
    </div>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired
};

export default EmployeeList;
