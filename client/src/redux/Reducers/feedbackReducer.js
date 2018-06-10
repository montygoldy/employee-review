import {
  GET_FEEDBACKS,
  ADD_FEEDBACK,
  UPDATE_FEEDBACK,
  GET_FEEDBACK
} from "../Actions/types";

const initialState = {
  feedbacks: [],
  feedback: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: action.payload
      };
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks]
      };
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload
      };
    default:
      return state;
  }
};
