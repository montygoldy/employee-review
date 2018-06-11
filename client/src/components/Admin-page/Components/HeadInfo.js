import React from "react";

const HeadInfo = ({ employees, feedbacks }) => {
  return (
    <section className="top-info flexFit">
      <div className="top-info__info-box">
        <i className="fas fa-users" />
        <div className="countWrapper">
          <span className="countInfo">Total number of employees</span>
          <span className="number">{employees.length}</span>
        </div>
      </div>
      <div className="top-info__info-box">
        <i className="far fa-star" />
        <div className="countWrapper">
          <span className="countInfo">Total number of Feedback</span>
          <span className="number">{feedbacks.length}</span>
        </div>
      </div>
      <div className="top-info__info-box">
        <i className="fas fa-users" />
        <div className="countWrapper">
          <span className="countInfo">Total number of Users</span>
          <span className="number">10</span>
        </div>
      </div>
    </section>
  );
};

export default HeadInfo;
