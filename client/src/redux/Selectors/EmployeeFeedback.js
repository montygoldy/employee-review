import { createSelector } from "reselect";

export const EmployeeSelector = state => state.employee;
export const FeedbackSelector = state => state.feedback;
export const UserSelector = state => state.auth;

export const UserFeedbackSelector = createSelector(
  [FeedbackSelector],
  feedback =>
    feedback.feedbacks.filter(feedback => feedback.reviewerId === "22222222")
);
