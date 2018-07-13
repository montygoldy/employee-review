import React, { Component } from "react";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateFeedbackRequest } from "../../../redux/Actions/feedbackActions";

class EditFeedbackModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: this.props.pro,
      con: this.props.con,
      comments: this.props.comments,
      rating: this.props.rating,
      id: this.props.id,
      employeeId: this.props.employeeId,
      reviewName: this.props.reviewName,
      errors: {}
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
      id,
      reviewName,
      employeeId
    } = this.state;

    const updateData = {
      pro,
      con,
      comments,
      rating,
      id,
      reviewName,
      employeeId
    };
    this.props.updateFeedbackRequest(updateData);
    this.props.onClose();
  };

  //Getting Errors
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="modal-popup">
        <h4 className="semi-heading">Edit Feedback</h4>
        <form>
          <TextareaField
            name="pro"
            placeholder="Positive Points"
            value={this.state.pro}
            onChange={this.handleChange}
            error={errors.pro}
          />
          <TextareaField
            name="con"
            placeholder="Negative Points"
            value={this.state.con}
            onChange={this.handleChange}
            error={errors.con}
          />
          <TextareaField
            name="comments"
            placeholder="Anything you would like to add"
            value={this.state.comments}
            onChange={this.handleChange}
            error={errors.comments}
          />
          <div className="input-group rating">
            <label>Rating</label>
            <div className="star-group">
              <StarRatingComponent
                name="rating"
                starCount={10}
                value={this.state.rating}
                onStarClick={this.onStarClick}
              />
            </div>
          </div>
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
  id: PropTypes.string.isRequired,
  updateFeedbackRequest: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateFeedbackRequest }
)(EditFeedbackModal);
