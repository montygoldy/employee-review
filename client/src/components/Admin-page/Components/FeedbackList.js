import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

class FeedbackList extends Component {
  render() {
    const feedbackInfo = this.props.feedbacks.map(feedback => (
      <FeedbackItem
        key={feedback.id}
        id={feedback.id}
        employeeId={feedback.employeeId}
        pro={feedback.pro}
        con={feedback.con}
        comments={feedback.comments}
        rating={feedback.rating}
        reviewerId={feedback.reviewerId}
        reviewerName={feedback.reviewerName}
        employeeName={feedback.employeeName}
      />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Reviewer Name</th>
            <th>Employee Name</th>
            <th>Con</th>
            <th>Pro</th>
            <th>Comments</th>
            <th>Ratings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{feedbackInfo}</tbody>
      </table>
    );
  }
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.array.isRequired
};

export default FeedbackList;