import React from "react";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";

const UserFeedback = ({ userFeedback = {} }) => {
  return (
    <section className="userFeedback">
      <h4 className="semi-heading">Employee Feedback</h4>
      <div className="wrapper">
        <div className="userDetails__info userFeedback__info">
          <ul>
            <li>
              <div className="title">Pro:</div>
              <div className="detail">{userFeedback.pro}</div>
            </li>
            <li>
              <div className="title">Cons:</div>
              <div className="detail">{userFeedback.con}</div>
            </li>
            <li>
              <div className="title">Comments:</div>
              <div className="detail">{userFeedback.comments}</div>
            </li>
            <li>
              <div className="title">Rating</div>
              <div className="detail">
                <StarRatingComponent
                  name="Employee Rating"
                  starCount={10}
                  value={userFeedback.rating}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

UserFeedback.propTypes = {
  userFeedback: PropTypes.object.isRequired
};

export default UserFeedback;
