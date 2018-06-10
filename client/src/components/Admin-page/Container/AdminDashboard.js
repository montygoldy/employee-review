import React, { Component } from "react";
import Table from "../../Reusable/Table";
import { connect } from "react-redux";
import {
  getEmployees,
  addEmployee
} from "../../../redux/Actions/employeeActions";
import AddEmployeeModal from "../Components/AddEmployeeModal";
import Modal from "react-responsive-modal";
import EmployeeTable from "../Components/EmployeeTable";
class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  addNewEmployee = employeeData => {
    this.props.addEmployee(employeeData);
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
              <button
                className="button button--white"
                onClick={this.toggleModal}
              >
                <i className="fas fa-plus-circle" /> Add New Employee
              </button>
              <Modal open={this.state.open} onClose={this.toggleModal} center>
                <AddEmployeeModal addNewEmployee={this.addNewEmployee} />
              </Modal>

              <EmployeeTable employees={employees} />
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
  { getEmployees, addEmployee }
)(AdminDashboard);
