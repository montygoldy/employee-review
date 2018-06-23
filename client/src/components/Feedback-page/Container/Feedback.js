import React, { Component } from "react";
import EmployeeInfo from "../Components/EmployeeInfo";
import { Link } from "react-router-dom";
import FeedbackForm from "../Components/FeedbackForm";
import { connect } from "react-redux";
import { getEmployeeDetailsRequest } from "../../../redux/Actions/employeeActions";
import {
  addFeedbackRequest,
  getFeedbackRequest
} from "../../../redux/Actions/feedbackActions";
import PropTypes from "prop-types";

class Feedback extends Component {
  //Dispatching action add new feedback
  addFeedback = feedbackData => {
    this.props.addFeedbackRequest(feedbackData);
  };

  componentDidMount = () => {
    this.props.getEmployeeDetailsRequest(this.props.match.params.id);
  };

  render() {
    const { employee } = this.props.employeeList;
    return (
      <div className="container">
        <div className="feedback-page">
          <div className="heading-group">
            <h3 className="page-heading">Employee Review</h3>
            <Link to="/review" className="button button--white">
              Go Back
            </Link>
          </div>
          <div className="wrapper flexFit">
            <EmployeeInfo employee={employee} />
            <FeedbackForm
              addFeedback={this.addFeedback}
              employeeId={employee.employeeId}
              employeeName={employee.name}
            />
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedbackList: PropTypes.object.isRequired,
  employeeList: PropTypes.object.isRequired,
  addFeedbackRequest: PropTypes.func.isRequired,
  getEmployeeDetailsRequest: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  feedbackList: state.feedback,
  employeeList: state.employee
});

export default connect(
  mapStatetoProps,
  { getEmployeeDetailsRequest, addFeedbackRequest, getFeedbackRequest }
)(Feedback);
