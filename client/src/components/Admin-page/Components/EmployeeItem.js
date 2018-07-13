import React, { Component } from "react";
import Modal from "react-responsive-modal";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEmployeeRequest } from "../../../redux/Actions/employeeActions";
import Moment from "react-moment";

class EmployeeItem extends Component {
  state = {
    openEditModal: false
  };

  //Edit employee modal
  editEmployee = () => {
    this.setState({ openEditModal: !this.state.openEditModal });
  };

  //dispatching delete employee action
  deleteEmployee = employeeId => {
    this.props.deleteEmployeeRequest(employeeId);
  };

  render() {
    const {
      employeeId,
      name,
      title,
      funFact,
      dateOfJoining,
      image
    } = this.props;
    return (
      <tr key={employeeId} className="employee_heading">
        <td>{name}</td>
        <td>{employeeId}</td>
        <td>{title}</td>
        <td>
          <Moment format="DD / MM / YYYY">{dateOfJoining}</Moment>
        </td>
        <td>{funFact}</td>
        <td className="actions">
          <div className="group">
            <Link to={`/review/${employeeId}`}>
              <i className="fas fa-eye" />
            </Link>

            <button className="edit" onClick={this.editEmployee}>
              <i className="fas fa-pencil-alt" />
            </button>

            <Modal
              open={this.state.openEditModal}
              onClose={this.editEmployee}
              center
            >
              <EditEmployeeModal
                name={name}
                employeeId={employeeId}
                title={title}
                funFact={funFact}
                dateOfJoining={dateOfJoining}
                image={image}
                onClose={this.editEmployee}
              />
            </Modal>

            <button onClick={() => this.deleteEmployee(employeeId)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

EmployeeItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  funFact: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  dateOfJoining: PropTypes.string.isRequired,
  deleteEmployeeRequest: PropTypes.func.isRequired,
  image: PropTypes.string
};

export default connect(
  null,
  { deleteEmployeeRequest }
)(EmployeeItem);
