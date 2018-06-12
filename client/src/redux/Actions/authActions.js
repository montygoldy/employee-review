import { SET_CURRENT_USER } from "./types";
import axios from "axios";

export const loginUser = userData => async dispatch => {
  axios
    .post("http://localhost:3004/users", userData)
    .then(response => response.data)
    .then(token => {
      localStorage.setItem("jwtToken", token);
      dispatch({
        type: SET_CURRENT_USER,
        payload: token
      });
    });
};
