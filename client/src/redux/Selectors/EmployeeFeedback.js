import { createSelector } from "reselect";

export const EmployeeSelector = state => state.employee;
export const FeedbackSelector = state => state.feedback;
export const UserSelector = state => state.auth;

export const UserFeedbackSelector = createSelector(
  [FeedbackSelector, EmployeeSelector, UserSelector],
  (feedback, employee, auth) =>
    feedback.feedbacks.filter(
      feedback =>
        feedback.reviewerId === auth.user.id &&
        feedback.employeeId === employee.employee.employeeId
    )
);

export const AssignedUserSelector = createSelector(
  [EmployeeSelector],
  employee => {
    // destructuring the assigned emloyees array
    const data = employee.assignedEmployees;
    return employee.employees.filter(({ employeeId }) =>
      data.includes(employeeId)
    );
  }
);
