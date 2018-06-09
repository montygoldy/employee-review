import React from "react";

const EmployeeItem = ({ title, body }) => {
  return (
    <article className="card">
      <div className="card__head">
        <img src="http://placeholder.pics/svg/150X100" alt="img" />
      </div>
      <div className="card__body">
        <div className="name">{title}</div>
        <div className="title">Designation</div>
        <div className="info">{body}</div>
      </div>
      <div className="card__footer flexCenter">
        <button className="button button--dark">
          <i className="far fa-star"> </i> Add Review
        </button>
      </div>
    </article>
  );
};

export default EmployeeItem;
