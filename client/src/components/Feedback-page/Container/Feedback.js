import React, { Component } from "react";
import EmployeeInfo from "../Components/EmployeeInfo";
import { Link } from "react-router-dom";
import FeedbackForm from "../Components/FeedbackForm";
import { connect } from "react-redux";
import { getEmployeeDetailsRequest } from "../../../redux/Actions/employeeActions";
import { addFeedbackRequest } from "../../../redux/Actions/feedbackActions";
import PropTypes from "prop-types";
import * as selectors from "../../../redux/Selectors/EmployeeFeedback";
import UserFeedback from "../Components/UserFeedback";

class Feedback extends Component {
  state = {
    errors: {}
  };
  //Dispatching action add new feedback
  addFeedback = feedbackData => {
    this.props.addFeedbackRequest(feedbackData);
  };

  componentDidMount = () => {
    this.props.getEmployeeDetailsRequest(this.props.match.params.id);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  render() {
    const {
      employeeList: { employee },
      userFeedback,
      user: { user }
    } = this.props;
    return (
      <div className="container">
        <div className="feedback-page">
          <div className="heading-group">
            <h3 className="page-heading">Employee Review</h3>
            {user.isAdmin ? (
              <Link to="/dashboard" className="button button--white">
                Go Back
              </Link>
            ) : (
              <Link to="/review" className="button button--white">
                Go Back
              </Link>
            )}
          </div>
          <div className="wrapper flexFit">
            <EmployeeInfo employee={employee} />

            {userFeedback.length > 0 ? (
              <UserFeedback userFeedback={userFeedback[0]} />
            ) : (
              <FeedbackForm
                addFeedback={this.addFeedback}
                employeeId={employee.employeeId}
                employeeName={employee.name}
                errors={this.state.errors}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  employeeList: PropTypes.object.isRequired,
  addFeedbackRequest: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStatetoProps = state => ({
  employeeList: selectors.EmployeeSelector(state),
  userFeedback: selectors.UserFeedbackSelector(state),
  user: selectors.UserSelector(state),
  errors: state.errors
});

export default connect(
  mapStatetoProps,
  { getEmployeeDetailsRequest, addFeedbackRequest }
)(Feedback);
