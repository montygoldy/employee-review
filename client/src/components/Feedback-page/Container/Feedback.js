import React, { Component } from "react";
import EmployeeInfo from "../Components/EmployeeInfo";
import FeedbackForm from "../Components/FeedbackForm";
import { connect } from "react-redux";
class Feedback extends Component {
  componentDidMount = () => {
    // this.props.getEmployeeDetails(this.props.match.params.id);
  };

  render() {
    return (
      <div className="container">
        <div className="feedback-page">
          <h3 className="page-heading">Employee Review</h3>
          <div className="wrapper flexFit">
            <EmployeeInfo />
            <FeedbackForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  feedbacks: state.feedback
});

export default connect(
  mapStatetoProps,
  {}
)(Feedback);
