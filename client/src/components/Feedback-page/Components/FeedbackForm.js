import React, { Component } from "react";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import StarRatingComponent from "react-star-rating-component";

class FeedbackForm extends Component {
  state = {
    pro: "",
    con: "",
    comments: "",
    rating: 0
  };

  onChange = e => {
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

  render() {
    return (
      <section className="feedback-form">
        <h5>Feedback form</h5>
        <form action="" className="wrapper">
          <TextareaField
            name="pro"
            placeholder="Positive feedback"
            value={this.state.pro}
            onChange={this.onChange}
          />
          <TextareaField
            name="con"
            placeholder="Negative feedback"
            value={this.state.con}
            onChange={this.onChange}
          />
          <TextareaField
            name="Comments"
            placeholder="Anything you would like to add"
            value={this.state.comments}
            onChange={this.onChange}
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
            <button className="button button--dark">Submit Feedback</button>
          </div>
        </form>
      </section>
    );
  }
}

export default FeedbackForm;
