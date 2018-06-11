import React, { Component } from "react";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import StarRatingComponent from "react-star-rating-component";
import { withRouter } from "react-router-dom";
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
    const feedbackData = {
      pro,
      con,
      comments,
      rating
    };
    this.props.addFeedback(feedbackData, this.props.history);
    this.setState({ pro: "", con: "", comments: "", rating: "" });
  };

  render() {
    return (
      <section className="feedback-form">
        <h4 className="semi-heading">Feedback form</h4>
        <form className="wrapper">
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
          <div className="submit-button flexCenter">
            <button className="button button--dark" onClick={this.handleSubmit}>
              Submit Feedback
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

export default withRouter(FeedbackForm);
