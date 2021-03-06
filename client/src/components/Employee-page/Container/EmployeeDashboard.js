import React, { Component } from "react";
import { connect } from "react-redux";
import EmployeeList from "../Components/EmployeeList";
import PropTypes from "prop-types";
import * as selectors from "../../../redux/Selectors/EmployeeFeedback";
import Loader from "../../Reusable/Loader";

class EmployeeDashboard extends Component {
  render() {
    const { assingedEmployeesList, loading } = this.props;
    const employeelist = assingedEmployeesList.length ? (
      <EmployeeList employees={assingedEmployeesList} />
    ) : (
      <h3> NO EMPLOYEES FOR REVIEW </h3>
    );
    return (
      <div className="container">
        <section className="employee-review">
          <h3 className="page-heading">Review Employees</h3>
          {loading ? <Loader /> : employeelist}
        </section>
      </div>
    );
  }
}

EmployeeDashboard.propTypes = {
  assingedEmployeesList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  assingedEmployeesList: selectors.AssignedUserSelector(state)
});

export default connect(
  mapStateToProps,
  null
)(EmployeeDashboard);
