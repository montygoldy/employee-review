import React from "react";
import PropTypes from "prop-types";

const EmployeeInfo = ({ employee }) => {
  return (
    <section className="userDetails">
      <h4 className="semi-heading">Employee Info</h4>
      <div className="wrapper">
        <div className="userDetails__image">
          <img src={employee.image} alt={`${employee.name} img`} />
        </div>
        <div className="userDetails__info">
          <ul>
            <li>
              <div className="title">Employee Name:</div>
              <div className="detail">{employee.name}</div>
            </li>
            <li>
              <div className="title">Employee Id:</div>
              <div className="detail">{employee.employeeId}</div>
            </li>
            <li>
              <div className="title">Designation:</div>
              <div className="detail">{employee.title}</div>
            </li>
            <li>
              <div className="title">Review period</div>
              <div className="detail">12/7/2017 to 12/10/2017</div>
            </li>
            <li>
              <div className="title">Date of joining:</div>
              <div className="detail">{employee.dateOfJoining}</div>
            </li>
            <li>
              <div className="title">Fun Fact:</div>
              <div className="detail">{employee.funFact}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

EmployeeInfo.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeInfo;
