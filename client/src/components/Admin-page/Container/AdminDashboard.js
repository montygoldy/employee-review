import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEmployeesRequest,
  addEmployeeRequest,
  deleteEmployee
} from "../../../redux/Actions/employeeActions";
import { getUsersRequest } from "../../../redux/Actions/authActions";
import { getFeedbacksRequest } from "../../../redux/Actions/feedbackActions";
import AddEmployeeModal from "../Components/AddEmployeeModal";
import Modal from "react-responsive-modal";
import EmployeeList from "../Components/EmployeeList";
import HeadInfo from "../Components/HeadInfo";
import FeedbackList from "../Components/FeedbackList";
import PropTypes from "prop-types";
import Loader from "../../Reusable/Loader";
import * as selectors from "../../../redux/Selectors/EmployeeFeedback";

class AdminDashboard extends Component {
  state = {
    openAddEmployeeModal: false
  };

  //Toggling modal popup for add employee
  toggleAddEmployeeModal = () => {
    this.setState({ openAddEmployeeModal: !this.state.openAddEmployeeModal });
  };

  //Dispatching addEmployee action with form data
  addNewEmployee = employeeData => {
    this.props.addEmployeeRequest(employeeData);
  };

  //Dispatching action to get all the employees and feedback on mount
  componentDidMount() {
    this.props.getEmployeesRequest();
    this.props.getFeedbacksRequest();
    this.props.getUsersRequest();
  }

  render() {
    const {
      employeeList: { employees, loading },
      feedbackList: { feedbacks },
      userList: { users }
    } = this.props;
    return (
      <div className="container">
        <div className="dashboard">
          <h3 className="page-heading">Admin Dashboard</h3>

          <HeadInfo employees={employees} feedbacks={feedbacks} users={users} />

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

              {loading ? (
                <Loader />
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

              {this.props.feedbackList.loading ? (
                <Loader />
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
  addEmployeeRequest: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  getEmployeesRequest: PropTypes.func.isRequired,
  getFeedbacksRequest: PropTypes.func.isRequired,
  getUsersRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employeeList: selectors.EmployeeSelector(state),
  feedbackList: selectors.FeedbackSelector(state),
  userList: state.auth
});

export default connect(
  mapStateToProps,
  {
    getEmployeesRequest,
    addEmployeeRequest,
    deleteEmployee,
    getFeedbacksRequest,
    getUsersRequest
  }
)(AdminDashboard);
