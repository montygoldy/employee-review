import React, { Component } from "react";
import Modal from "react-responsive-modal";
import EditEmployeeModal from "../Components/EditEmployeeModal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteEmployee,
  getEmployeeDetails
} from "../../../redux/Actions/employeeActions";

class EmployeeItem extends Component {
  state = {
    openEditModal: false
  };

  editEmployee = () => {
    this.setState({ openEditModal: !this.state.openEditModal });
  };

  deleteEmployee = employeeId => {
    this.props.deleteEmployee(employeeId);
  };

  render() {
    const {
      id,
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
        <td>{dateOfJoining}</td>
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
                id={id}
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
  deleteEmployee: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  getEmployeeDetails: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEmployee, getEmployeeDetails }
)(EmployeeItem);
