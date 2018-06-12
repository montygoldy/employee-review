import {
  GET_FEEDBACKS,
  ADD_FEEDBACK,
  UPDATE_FEEDBACK,
  FEEDBACKS_LOADING,
  GET_FEEDBACK
} from "./types";
import axios from "axios";

//Add Feedback
export const addFeedback = (feedbackData, history) => dispatch => {
  axios
    .post(
      "http://localhost:3004/feedbacks",
      feedbackData, //data
      { headers: { "Content-Type": "application/json" } } //config
    )
    .then(response =>
      dispatch({
        type: ADD_FEEDBACK,
        payload: response.data
      })
    )
    .then(history.push("/review"))
    .catch(err => console.log(err));
};

//Get Feedbacks
export const getFeedbacks = () => dispatch => {
  dispatch({ type: FEEDBACKS_LOADING });
  axios
    .get("http://localhost:3004/feedbacks")
    .then(response =>
      dispatch({
        type: GET_FEEDBACKS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

//Edit Feedback incomplete
export const editFeedback = () => dispatch => {};

//Getting a feedback for a particular employee
export const getFeedbackInfo = employeeId => dispatch => {
  axios
    .get(`http://localhost:3004/feedbacks?employeeId=${employeeId}`)
    .then(response =>
      dispatch({
        type: GET_FEEDBACK,
        payload: response.data
      })
    );
};
