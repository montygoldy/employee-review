import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

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
              <div className="title">Date of joining:</div>
              <div className="detail">
                <Moment format="DD / MM / YYYY">
                  {employee.dateOfJoining}
                </Moment>
              </div>
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
