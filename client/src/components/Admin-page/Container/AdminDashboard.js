import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEmployees,
  addEmployee,
  deleteEmployee
} from "../../../redux/Actions/employeeActions";
import { getFeedbacks } from "../../../redux/Actions/feedbackActions";
import AddEmployeeModal from "../Components/AddEmployeeModal";
import Modal from "react-responsive-modal";
import EmployeeList from "../Components/EmployeeList";
import HeadInfo from "../Components/HeadInfo";
import FeedbackList from "../Components/FeedbackList";
import PropTypes from "prop-types";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddEmployeeModal: false
    };
  }

  toggleAddEmployeeModal = () => {
    this.setState({ openAddEmployeeModal: !this.state.openAddEmployeeModal });
  };

  addNewEmployee = employeeData => {
    this.props.addEmployee(employeeData);
  };

  componentDidMount() {
    this.props.getEmployees();
    this.props.getFeedbacks();
  }

  render() {
    const { employees } = this.props.employeeList;
    const { feedbacks } = this.props.feedbackList;
    return (
      <div className="container">
        <div className="dashboard">
          <h3 className="page-heading">Admin Dashboard</h3>
          <HeadInfo employees={employees} feedbacks={feedbacks} />
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
                <AddEmployeeModal addNewEmployee={this.addNewEmployee} />
              </Modal>

              <EmployeeList
                employees={employees}
                deleteEmployee={this.deleteEmployee}
              />
            </div>
          </section>
          <section className="feedback">
            <div className="employees__table">
              <h4 className="semi-heading">Feedback Table</h4>
              <FeedbackList feedbacks={feedbacks} />
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
  addEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  getEmployees: PropTypes.func.isRequired,
  getFeedbacks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employeeList: state.employee,
  feedbackList: state.feedback
});

export default connect(
  mapStateToProps,
  { getEmployees, addEmployee, deleteEmployee, getFeedbacks }
)(AdminDashboard);
