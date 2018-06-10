import React from "react";
import { Link } from "react-router-dom";

const EmployeeItem = ({ title, name, image, funFact, employeeId }) => {
  //Reducing length of the employee detail
  const maxLength = 60;
  const shortFunFact = funFact.substring(0, maxLength);
  return (
    <article className="card">
      <div className="card__head">
        <img src={image} alt={`${name} img`} />
      </div>
      <div className="card__body">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
        <div className="info">{`${shortFunFact}......`}</div>
      </div>
      <div className="card__footer flexCenter">
        <Link to={`/review/${employeeId}`} className="button button--dark">
          <i className="far fa-star"> </i> Add Review
        </Link>
      </div>
    </article>
  );
};

export default EmployeeItem;
