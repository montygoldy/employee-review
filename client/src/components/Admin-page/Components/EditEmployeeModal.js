import React, { Component } from "react";
import InputField from "../../Reusable/FormElements/InputField";
import TextareaField from "../../Reusable/FormElements/TextareaField";
import PropTypes from "prop-types";

class EditEmployeeModal extends Component {
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
    // const {
    //   name,
    //   title,
    //   funFact,
    //   image,
    //   employeeId,
    //   dateOfJoining
    // } = this.state;
  };

  render() {
    return (
      <div className="modal-popup">
        <h4 className="semi-heading">Edit Employee</h4>
        {this.props.employee}
        <form>
          <InputField
            name="name"
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            label={false}
          />
          <InputField
            name="title"
            placeholder="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            label={false}
          />
          <TextareaField
            name="funFact"
            placeholder="Employee Info"
            value={this.state.funFact}
            onChange={this.handleChange}
            label={false}
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
          />
          <InputField
            name="dateOfJoining"
            placeholder="Date of Joining dd/mm/yyyy"
            type="text"
            value={this.state.dateOfJoining}
            onChange={this.handleChange}
            label={false}
          />
          <div className="flexCenter">
            <button className="button button--dark" onClick={this.handleSubmit}>
              <i className="fas fa-user-plus" />Edit Employee
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditEmployeeModal;
