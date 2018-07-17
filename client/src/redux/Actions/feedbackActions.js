import * as actionTypes from "./types";

//Add Feedback
export const addFeedbackRequest = data => ({
  type: actionTypes.ADD_FEEDBACK_REQUEST,
  payload: data
});

export const addFeedback = feedbackData => ({
  type: actionTypes.ADD_FEEDBACK,
  payload: feedbackData
});

export const addFeedbackErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Get Feedbacks
export const getFeedbacksRequest = () => ({
  type: actionTypes.GET_FEEDBACKS_REQUEST
});

export const getFeedbacks = feedbacks => ({
  type: actionTypes.GET_FEEDBACKS,
  payload: feedbacks
});

export const getFeedbacksErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});

//Edit and update Feedback
export const updateFeedbackRequest = newFeedbackData => ({
  type: actionTypes.UPDATE_FEEDBACK_REQUEST,
  payload: newFeedbackData
});

export const updateFeedback = updatedData => ({
  type: actionTypes.UPDATE_FEEDBACK,
  payload: updatedData
});

export const updateFeedbackErrors = errors => ({
  type: actionTypes.GET_ERRORS,
  payload: errors
});
