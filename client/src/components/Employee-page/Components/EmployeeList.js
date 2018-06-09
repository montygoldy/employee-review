import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employees }) => {
  return (
    <div className="article-group">
      {employees.map(employee => (
        <EmployeeItem
          key={employee.id}
          title={employee.title}
          body={employee.body}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
