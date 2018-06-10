import React, { Component } from "react";
import Table from "../../Reusable/Table";
import { connect } from "react-redux";
import InputField from "../../Reusable/FormElements/InputField";
import { getEmployees } from "../../../redux/Actions/employeeActions";

class AdminDashboard extends Component {
  state = {
    name: "",
    title: "",
    info: "",
    image: ""
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const { employees } = this.props.employeeList;
    return (
      <div className="container">
        <div className="dashboard">
          <h3 className="page-heading">Admin Dashboard</h3>
          <section className="top-info flexFit">
            <div className="top-info__info-box">
              <i className="fas fa-users" />
              <div className="countWrapper">
                <span className="countInfo">Total number of employees</span>
                <span className="number">{employees.length}</span>
              </div>
            </div>
            <div className="top-info__info-box">
              <i className="far fa-star" />
              <div className="countWrapper">
                <span className="countInfo">Total number of Feedback</span>
                <span className="number">10</span>
              </div>
            </div>
            <div className="top-info__info-box">
              <i className="fas fa-users" />
              <div className="countWrapper">
                <span className="countInfo">Total number of Users</span>
                <span className="number">10</span>
              </div>
            </div>
          </section>
          <section className="employees">
            <div className="employees__table">
              <h5>Employees Table</h5>
              <Table />
            </div>
            <div className="employees__add">
              <h5>Add Employee</h5>
              <form>
                <InputField
                  name="Name"
                  placeholder="min. 6 characters"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <InputField
                  name="Title"
                  placeholder="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.onChange}
                />
                <InputField
                  name="info"
                  placeholder="Info"
                  type="text"
                  value={this.state.info}
                  onChange={this.onChange}
                />
                <InputField
                  name="image"
                  placeholder="Image"
                  type="text"
                  value={this.state.image}
                  onChange={this.onChange}
                />
                <button className="button button--dark">
                  <i className="fas fa-user-plus" />Add Employee
                </button>
              </form>
            </div>
          </section>
          <section className="feedback">
            <h5>Feedback Table</h5>
            <Table />
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employee
});

export default connect(
  mapStateToProps,
  { getEmployees }
)(AdminDashboard);
