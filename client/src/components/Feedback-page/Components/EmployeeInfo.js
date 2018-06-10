import React from "react";

const EmployeeInfo = () => {
  return (
    <section className="userDetails">
      <h5>Employee Info</h5>
      <div className="wrapper">
        <div className="userDetails__image">
          <img src="http://placeholder.pics/svg/300x200" alt="employee img" />
        </div>
        <div className="userDetails__info">
          <ul>
            <li>
              <div className="title">Employee Name:</div>
              <div className="detail">John Doe</div>
            </li>
            <li>
              <div className="title">Employee Id:</div>
              <div className="detail">dc2fc2f22ce</div>
            </li>
            <li>
              <div className="title">Designation:</div>
              <div className="detail">Manager</div>
            </li>
            <li>
              <div className="title">Review period</div>
              <div className="detail">12/7/2017 to 12/10/2017</div>
            </li>
            <li>
              <div className="title">Date of joining:</div>
              <div className="detail">26/10/2013</div>
            </li>
            <li>
              <div className="title">Fun Fact:</div>
              <div className="detail">
                This is a test paragraph in order to check the line height and
                spacing
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EmployeeInfo;
