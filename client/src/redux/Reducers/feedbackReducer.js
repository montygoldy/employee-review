import {
  GET_FEEDBACKS,
  ADD_FEEDBACK,
  UPDATE_FEEDBACK,
  FEEDBACKS_LOADING,
  GET_FEEDBACK
} from "../Actions/types";

const initialState = {
  feedbacks: [],
  feedback: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FEEDBACKS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: action.payload,
        loading: false
      };
    case UPDATE_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.map(
          feedback =>
            feedback.id === action.payload.id ? action.payload : feedback
        )
      };
    case ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
        loading: false
      };
    case GET_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
