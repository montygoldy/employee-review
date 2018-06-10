import React from "react";
import { Link } from "react-router-dom";

const EmployeeItem = ({ title, body, id }) => {
  //Reducing length of the employee detail
  const maxLength = 60;
  const shortBody = body.substring(0, maxLength);
  return (
    <article className="card">
      <div className="card__head">
        <img src="http://placeholder.pics/svg/150X100" alt="img" />
      </div>
      <div className="card__body">
        <div className="name">{title}</div>
        <div className="title">Designation</div>
        <div className="info">{`${shortBody}......`}</div>
      </div>
      <div className="card__footer flexCenter">
        <Link to={`/review/${id}`} className="button button--dark">
          <i className="far fa-star"> </i> Add Review
        </Link>
      </div>
    </article>
  );
};

export default EmployeeItem;
