import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editFeedback } from "../../../redux/Actions/feedbackActions";

class FeedbackItem extends Component {
  editEmployee = employeeId => {
    this.props.editFeedback(employeeId);
  };

  render() {
    const {
      id,
      pro,
      con,
      comments,
      rating,
      reviewerName,
      employeeName,
      employeeId
    } = this.props;
    return (
      <tr key={id} className="feedback_heading">
        <td>{reviewerName}</td>
        <td>{employeeName}</td>
        <td>{pro}</td>
        <td>{con}</td>
        <td>{comments}</td>
        <td>{rating}</td>
        <td className="actions">
          <div className="group">
            <Link to={`/review/${employeeId}`}>
              <i className="fas fa-eye" />
            </Link>
            <button className="edit">
              <i className="fas fa-pencil-alt" />
            </button>
            <Link to={`/review/${employeeId}`} className="add">
              <i className="fas fa-plus-circle" />
            </Link>
          </div>
        </td>
      </tr>
    );
  }
}

FeedbackItem.propTypes = {
  employeeId: PropTypes.string.isRequired,
  pro: PropTypes.string.isRequired,
  con: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default connect(
  null,
  { editFeedback }
)(FeedbackItem);
