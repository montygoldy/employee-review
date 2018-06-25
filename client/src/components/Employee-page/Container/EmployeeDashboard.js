import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeList from "../Components/EmployeeList";
import { getEmployeesRequest } from "../../../redux/Actions/employeeActions";
import PropTypes from "prop-types";
import Loader from "../../Reusable/Loader";
import * as selectors from "../../../redux/Selectors/EmployeeFeedback";
class EmployeeDashboard extends Component {
  componentDidMount() {
    this.props.getEmployeesRequest();
  }
  render() {
    const { employees, loading } = this.props.employeeList;
    return (
      <div className="container">
        <section className="employee-review">
          <h3 className="page-heading">Review Employees</h3>
          {loading ? <Loader /> : <EmployeeList employees={employees} />}
        </section>
      </div>
    );
  }
}

EmployeeDashboard.propTypes = {
  getEmployeesRequest: PropTypes.func.isRequired,
  employeeList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  employeeList: selectors.EmployeeSelector(state)
});

export default connect(
  mapStateToProps,
  { getEmployeesRequest }
)(EmployeeDashboard);
