import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-responsive-modal";
import EditFeedbackModal from "./EditFeedBackModal";

class FeedbackItem extends Component {
  state = {
    openEditModal: false
  };

  editFeedback = () => {
    this.setState({ openEditModal: !this.state.openEditModal });
  };

  render() {
    const {
      id,
      pro,
      con,
      comments,
      rating,
      reviewerName,
      employeeId
    } = this.props;
    return (
      <tr key={id} className="feedback_heading">
        <td>{reviewerName}</td>
        <td>{pro}</td>
        <td>{con}</td>
        <td>{comments}</td>
        <td>{rating}</td>
        <td className="actions">
          <div className="group">
            <button className="edit" onClick={this.editFeedback}>
              <i className="fas fa-pencil-alt" />
            </button>

            <Modal
              open={this.state.openEditModal}
              onClose={this.editFeedback}
              center
            >
              <EditFeedbackModal
                con={con}
                pro={pro}
                comments={comments}
                rating={rating}
                id={id}
                reviewerName={reviewerName}
                employeeId={employeeId}
                onClose={this.editFeedback}
              />
            </Modal>
            <Link to={`/review/${employeeId}`} className="add">
              <i className="fas fa-plus-circle" />
            </Link>
          </div>
        </td>
      </tr>
    );
  }
}

FeedbackItem.propTypes = {
  employeeId: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  pro: PropTypes.string.isRequired,
  con: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default FeedbackItem;
