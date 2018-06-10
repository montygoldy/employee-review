import React, { Component } from "react";
import EmployeeInfo from "../Components/EmployeeInfo";
import FeedbackForm from "../Components/FeedbackForm";

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

export default Feedback;
