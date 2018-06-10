import React, { Component } from "react";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import StarRatingComponent from "react-star-rating-component";
import { withRouter } from "react-router-dom";

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/review");
    this.setState({ pro: "", con: "", comments: "", rating: "" });
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
            name="comments"
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
            <button className="button button--dark" onClick={this.handleSubmit}>
              Submit Feedback
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default withRouter(FeedbackForm);
