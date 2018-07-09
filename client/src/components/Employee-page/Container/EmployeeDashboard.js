import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeList from "../Components/EmployeeList";
import PropTypes from "prop-types";
import Loader from "../../Reusable/Loader";
import * as selectors from "../../../redux/Selectors/EmployeeFeedback";
class EmployeeDashboard extends Component {
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
  employeeList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  employeeList: selectors.EmployeeSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(EmployeeDashboard);
