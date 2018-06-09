import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeList from "../Components/EmployeeList";
import { getEmployees } from "../../../redux/Actions/employeeActions";
// import PropTypes from "prop-types";

class EmployeeDashboard extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }
  render() {
    const { employees } = this.props.employees;
    return (
      <div className="container">
        <section className="employee-review">
          <h3 className="page-heading">Review Employees</h3>
          <EmployeeList employees={employees} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employee
});

export default connect(
  mapStateToProps,
  { getEmployees }
)(EmployeeDashboard);
