import React, { Component } from "react";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: "",
      con: "",
      comments: "",
      rating: 0
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
    const { pro, con, comments, rating } = this.state;
    const { employeeId, employeeName } = this.props;
    const feedbackData = {
      pro,
      con,
      comments,
      rating,
      employeeId,
      employeeName
    };
    this.props.addFeedback(feedbackData);
    this.setState({ pro: "", con: "", comments: "", rating: 0 });
  };

  render() {
    const { errors } = this.props;
    return (
      <section className="feedback-form">
        <h4 className="semi-heading">Feedback form</h4>
        <form className="wrapper">
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
                name="Employee Rating"
                starCount={10}
                value={this.state.rating}
                onStarClick={this.onStarClick}
              />
            </div>
            {errors.rating && (
              <div className="invalid-feedback"> {errors.rating} </div>
            )}
          </div>
          <div className="submit-button flexCenter">
            <button className="button button--dark" onClick={this.handleSubmit}>
              <i className="far fa-comments" /> Submit Feedback
            </button>
          </div>
        </form>
      </section>
    );
  }
}

FeedbackForm.propTypes = {
  addFeedback: PropTypes.func.isRequired
};

export default FeedbackForm;
