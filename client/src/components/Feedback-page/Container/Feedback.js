import React, { Component } from "react";
import EmployeeInfo from "../Components/EmployeeInfo";
import { Link } from "react-router-dom";
import FeedbackForm from "../Components/FeedbackForm";
import { connect } from "react-redux";
import { getEmployeeDetails } from "../../../redux/Actions/employeeActions";
class Feedback extends Component {
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
            <FeedbackForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  feedbacks: state.feedback,
  employeeList: state.employee
});

export default connect(
  mapStatetoProps,
  { getEmployeeDetails }
)(Feedback);
