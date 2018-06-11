import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class FeedbackTable extends Component {
  render() {
    const feedbackInfo = this.props.feedbacks.map(feedback => (
      <tr key={feedback.id} className="feedback_heading">
        <td>{feedback.employeeId}</td>
        <td>{feedback.pro}</td>
        <td>{feedback.con}</td>
        <td>{feedback.comments}</td>
        <td>{feedback.rating}</td>
        <td className="actions">
          <div className="group">
            <Link to={`/review/${feedback.employeeId}`}>
              <i className="fas fa-eye" />
            </Link>
            <button className="edit">
              <i className="fas fa-pencil-alt" />
            </button>
          </div>
        </td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
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

FeedbackTable.propTypes = {
  feedbacks: PropTypes.array.isRequired
};

export default FeedbackTable;
