import React, { Component } from "react";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import InputField from "../../Reusable/FormElements/InputField";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateFeedbackRequest } from "../../../redux/Actions/feedbackActions";

class EditFeedbackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: "",
      con: "",
      comments: "",
      rating: 0,
      reviewerId: "",
      reviewerName: "",
      employeeName: "",
      employeeId: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onStarClick = nextValue => {
    this.setState({
      rating: nextValue
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      pro,
      con,
      comments,
      rating,
      reviewerId,
      reviewerName,
      employeeName,
      employeeId
    } = this.state;
    const { id } = this.props;
    const updateData = {
      pro,
      con,
      comments,
      rating,
      id,
      reviewerId,
      reviewerName,
      employeeName,
      employeeId
    };
    this.props.updateFeedbackRequest(updateData);
    this.props.onClose();
  };

  //Updating the state before mounting with user info
  componentDidMount() {
    this.setState({
      pro: this.props.pro,
      con: this.props.con,
      comments: this.props.comments,
      rating: this.props.rating,
      reviewerId: this.props.reviewerId,
      reviewerName: this.props.reviewerName,
      employeeName: this.props.employeeName,
      employeeId: this.props.employeeId
    });
  }

  render() {
    return (
      <div className="modal-popup">
        <h4 className="semi-heading">Edit Feedback</h4>
        <form>
          <TextareaField
            name="pro"
            placeholder="Positive Points"
            value={this.state.pro}
            onChange={this.handleChange}
          />
          <TextareaField
            name="con"
            placeholder="Negative Points"
            value={this.state.con}
            onChange={this.handleChange}
          />
          <TextareaField
            name="comments"
            placeholder="Anything you would like to add"
            value={this.state.comments}
            onChange={this.handleChange}
          />
          <div className="input-group rating">
            <label>Rating</label>
            <div className="star-group">
              <StarRatingComponent
                name="Employee Rating"
                starCount={10}
                value={this.state.rating}
                onStarClick={this.onStarClick}
              />
            </div>
          </div>
          <InputField
            name="employeeName"
            placeholder="Employee Name"
            type="text"
            value={this.state.employeeName}
            onChange={this.handleChange}
          />
          <InputField
            name="employeeId"
            placeholder="Employee Id"
            type="text"
            value={this.state.employeeId}
            onChange={this.handleChange}
          />
          <InputField
            name="reviewerName"
            placeholder="Reviewer Name"
            type="text"
            value={this.state.reviewerName}
            onChange={this.handleChange}
          />
          <InputField
            name="reviewerId"
            placeholder="Reviewer Id"
            type="text"
            value={this.state.reviewerId}
            onChange={this.handleChange}
          />
          <div className="flexCenter">
            <button className="button button--dark" onClick={this.handleSubmit}>
              <i className="far fa-comments" />Edit Feedback
            </button>
          </div>
        </form>
      </div>
    );
  }
}

EditFeedbackModal.propTypes = {
  pro: PropTypes.string.isRequired,
  con: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  updateFeedbackRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateFeedbackRequest }
)(EditFeedbackModal);
