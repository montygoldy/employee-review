import React, { Component } from "react";
import InputField from "../../Reusable/FormElements/InputField";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import PropTypes from "prop-types";

class AddEmployeeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      funFact: "",
      image: "",
      employeeId: "",
      dateOfJoining: ""
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
    const employeeData = {
      name,
      title,
      funFact,
      image,
      employeeId,
      dateOfJoining
    };
    this.props.addNewEmployee(employeeData);
    this.setState({
      name: "",
      title: "",
      funFact: "",
      image: "",
      employeeId: "",
      dateOfJoining: ""
    });
  };

  render() {
    const { errors } = this.props;
    return (
      <div className="modal-popup addemployeeModal">
        <h4 className="semi-heading">Add Employee</h4>
        <form>
          <InputField
            name="name"
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            label={false}
            error={errors.name}
          />
          <InputField
            name="title"
            placeholder="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            label={false}
            error={errors.title}
          />
          <TextareaField
            name="funFact"
            placeholder="Employee Info"
            value={this.state.funFact}
            onChange={this.handleChange}
            label={false}
            error={errors.funFact}
          />
          <InputField
            name="image"
            placeholder="Image"
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
            label={false}
          />
          <InputField
            name="employeeId"
            placeholder="Employee Id min 8 digits"
            type="text"
            value={this.state.employeeId}
            onChange={this.handleChange}
            label={false}
            error={errors.employeeId}
          />
          <InputField
            name="dateOfJoining"
            placeholder="Date of Joining mm/dd/yyyy"
            type="date"
            value={this.state.dateOfJoining}
            onChange={this.handleChange}
            label={false}
            error={errors.dateOfJoining}
          />
          <div className="flexCenter">
            <button className="button button--dark" onClick={this.handleSubmit}>
              <i className="fas fa-user-plus" />Add Employee
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddEmployeeModal.propTypes = {
  addNewEmployee: PropTypes.func.isRequired
};

export default AddEmployeeModal;
