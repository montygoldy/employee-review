import React, { Component } from "react";
import InputField from "../../Reusable/FormElements/InputField";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateEmployeeRequest } from "../../../redux/Actions/employeeActions";

class EditEmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      title: this.props.title,
      funFact: this.props.funFact,
      image: this.props.image,
      employeeId: this.props.employeeId,
      dateOfJoining: this.props.dateOfJoining,
      errors: {}
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      name,
      title,
      funFact,
      image,
      employeeId,
      dateOfJoining
    } = this.state;
    const updateData = {
      name,
      title,
      funFact,
      image,
      employeeId,
      dateOfJoining
    };
    this.props.updateEmployeeRequest(updateData);
    this.props.onClose();
  };

  //Errors
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
        <h4 className="semi-heading">Edit Employee</h4>
        <form>
          <InputField
            name="name"
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            error={errors.name}
          />
          <InputField
            name="title"
            placeholder="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            error={errors.title}
          />
          <TextareaField
            name="funFact"
            placeholder="Employee Info"
            value={this.state.funFact}
            onChange={this.handleChange}
            error={errors.funFact}
          />
          <InputField
            name="image"
            placeholder="Employee Image"
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <InputField
            name="employeeId"
            placeholder="Employee Id min 8 digits"
            type="text"
            value={this.state.employeeId}
            onChange={this.handleChange}
            error={errors.employeeId}
          />
          <InputField
            name="dateOfJoining"
            type="text"
            value={this.state.dateOfJoining}
            onChange={this.handleChange}
            error={errors.dateOfJoining}
          />
          <div className="flexCenter">
            <button className="button button--dark" onClick={this.handleSubmit}>
              <i className="fas fa-user-edit" />Edit Employee
            </button>
          </div>
        </form>
      </div>
    );
  }
}

EditEmployeeModal.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  funFact: PropTypes.string.isRequired,
  dateOfJoining: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  updateEmployeeRequest: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateEmployeeRequest }
)(EditEmployeeModal);
