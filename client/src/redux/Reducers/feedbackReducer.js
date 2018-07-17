import * as actionTypes from "../Actions/types";

const initialState = {
  feedbacks: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FEEDBACKS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: action.payload,
        loading: false
      };
    case actionTypes.UPDATE_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.map(
          feedback =>
            feedback._id === action.payload._id ? action.payload : feedback
        )
      };
    case actionTypes.ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
        loading: false
      };
    default:
      return state;
  }
};
