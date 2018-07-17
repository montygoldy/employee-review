import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addEmployeeRequest,
  assignEmployeesRequest
} from "../../../redux/Actions/employeeActions";
import AddEmployeeModal from "../Components/AddEmployeeModal";
import Modal from "react-responsive-modal";
import EmployeeList from "../Components/EmployeeList";
import HeadInfo from "../Components/HeadInfo";
import FeedbackList from "../Components/FeedbackList";
import PropTypes from "prop-types";
import * as selectors from "../../../redux/Selectors/EmployeeFeedback";
import Select from "react-select";

class AdminDashboard extends Component {
  state = {
    openAddEmployeeModal: false,
    errors: {},
    selectedEmployees: [],
    stayOpen: false,
    removeSelected: true
  };

  //Assigning the employees
  handleSelectChange = selectedEmployees => {
    this.setState({
      selectedEmployees
    });
  };

  assignEmployees = e => {
    e.preventDefault();
    const data = { employeeId: this.state.selectedEmployees };
    this.props.assignEmployeesRequest(data);
    this.setState({
      selectedEmployees: []
    });
  };

  //Toggling modal popup for add employee
  toggleAddEmployeeModal = () => {
    this.setState({ openAddEmployeeModal: !this.state.openAddEmployeeModal });
  };

  //Dispatching addEmployee action with form data
  addNewEmployee = employeeData => {
    this.props.addEmployeeRequest(employeeData);
  };

  // Checking for errors
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  render() {
    const {
      employeeList: { employees },
      feedbackList: { feedbacks },
      userList: { users }
    } = this.props;
    console.log(this.props);
    // Custom data for select
    const data = employees.map(employee => ({
      label: employee.name,
      value: employee.employeeId
    }));
    const { errors, selectedEmployees, stayOpen } = this.state;
    return (
      <div className="container">
        <div className="dashboard">
          <h3 className="page-heading">Admin Dashboard</h3>

          <HeadInfo employees={employees} feedbacks={feedbacks} users={users} />

          <section className="assign_employees">
            <div className="employees__table">
              <h4 className="semi-heading"> Assign Employees </h4>
              {errors.assignName && (
                <div className="invalid-feedback">{errors.assignName}</div>
              )}
              <div className="flexFit">
                <div className="select">
                  <Select
                    closeOnSelect={!stayOpen}
                    multi
                    onChange={this.handleSelectChange}
                    placeholder="Select Employees"
                    removeSelected={this.state.removeSelected}
                    simpleValue
                    options={data}
                    value={selectedEmployees}
                  />
                </div>
                <button
                  className="button button--white add-employee"
                  onClick={this.assignEmployees}
                >
                  <i className="fas fa-tasks" />
                  Assign Employees
                </button>
              </div>
            </div>
          </section>

          <section className="employees">
            <div className="employees__table">
              <div className="flexFit">
                <h4 className="semi-heading">Employees Table</h4>

                <button
                  className="button button--white add-employee"
                  onClick={this.toggleAddEmployeeModal}
                >
                  <i className="fas fa-plus-circle" /> Add New Employee
                </button>
              </div>

              <Modal
                open={this.state.openAddEmployeeModal}
                onClose={this.toggleAddEmployeeModal}
                center
              >
                <AddEmployeeModal
                  addNewEmployee={this.addNewEmployee}
                  errors={errors}
                />
              </Modal>
              {employees.length === 0 ? (
                <div> {errors.noEmployees} </div>
              ) : (
                <EmployeeList
                  employees={employees}
                  deleteEmployee={this.deleteEmployee}
                />
              )}
            </div>
          </section>
          <section className="feedback">
            <div className="employees__table">
              <h4 className="semi-heading">Feedback Table</h4>
              {feedbacks.length === 0 ? (
                <div> {errors.noFeedbacks} </div>
              ) : (
                <FeedbackList feedbacks={feedbacks} />
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

AdminDashboard.propTypes = {
  employeeList: PropTypes.object.isRequired,
  feedbackList: PropTypes.object.isRequired,
  userList: PropTypes.object.isRequired,
  addEmployeeRequest: PropTypes.func.isRequired,
  assignEmployeesRequest: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  employeeList: selectors.EmployeeSelector(state),
  feedbackList: selectors.FeedbackSelector(state),
  userList: selectors.UserSelector(state),
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    addEmployeeRequest,
    assignEmployeesRequest
  }
)(AdminDashboard);
