import React from "react";
import EmployeeItem from "./EmployeeItem";

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

export default EmployeeList;
