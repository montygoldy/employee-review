import {
  GET_FEEDBACKS,
  ADD_FEEDBACK,
  UPDATE_FEEDBACK,
  FEEDBACKS_LOADING,
  GET_FEEDBACK
} from "./types";
import api from "../../Api";

//Add Feedback
export const addFeedback = (feedbackData, history) => dispatch => {
  api.feedback
    .add(feedbackData)
    .then(data =>
      dispatch({
        type: ADD_FEEDBACK,
        payload: data
      })
    )
    .then(history.push("/review"))
    .catch(err => console.log(err));
};

//Get Feedbacks
export const getFeedbacks = () => dispatch => {
  dispatch({ type: FEEDBACKS_LOADING });
  api.feedback
    .all()
    .then(data =>
      dispatch({
        type: GET_FEEDBACKS,
        payload: data
      })
    )
    .catch(err => console.log(err));
};

//Edit and update Feedback incomplete
export const updateFeedback = newFeedbackData => dispatch => {
  api.feedback
    .edit(newFeedbackData)
    .then(data =>
      dispatch({
        type: UPDATE_FEEDBACK,
        payload: data
      })
    )
    .catch(err => console.log(err));
};

//Getting a feedback for a particular employee
export const getFeedbackInfo = employeeId => dispatch => {
  dispatch({ type: FEEDBACKS_LOADING });
  api.feedback
    .feedbackInfo(employeeId)
    .then(data =>
      dispatch({
        type: GET_FEEDBACK,
        payload: data
      })
    )
    .catch(err => console.log(err));
};
