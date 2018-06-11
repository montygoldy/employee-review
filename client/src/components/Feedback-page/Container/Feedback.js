import React, { Component } from "react";
import EmployeeInfo from "../Components/EmployeeInfo";
import { Link } from "react-router-dom";
import FeedbackForm from "../Components/FeedbackForm";
import { connect } from "react-redux";
import { getEmployeeDetails } from "../../../redux/Actions/employeeActions";
import { addFeedback } from "../../../redux/Actions/feedbackActions";

class Feedback extends Component {
  addFeedback = (feedbackData, history) => {
    this.props.addFeedback(feedbackData, history);
  };

  componentDidMount = () => {
    this.props.getEmployeeDetails(this.props.match.params.id);
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
            <FeedbackForm addFeedback={this.addFeedback} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  feedbackList: state.feedback,
  employeeList: state.employee
});

export default connect(
  mapStatetoProps,
  { getEmployeeDetails, addFeedback }
)(Feedback);
