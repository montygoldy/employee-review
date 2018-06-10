import { GET_FEEDBACKS, ADD_FEEDBACK, UPDATE_FEEDBACK } from "./types";
import axios from "axios";

//Adding a new feedback
export const addFeedback = feedbackData => dispatch => {
  dispatch({
    type: ADD_FEEDBACK,
    payload: feedbackData
  });
};

//Getting a feedback for a particular employee
export const getFeedbacks = () => dispatch => {};
