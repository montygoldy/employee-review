import { SET_CURRENT_USER, GET_USERS } from "./types";
import axios from "axios";

//Incomplete login user
export const loginUser = userData => dispatch => {
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

//Getting all users array from db.json
export const getUsers = () => dispatch => {
  axios.get("http://localhost:3004/users").then(response =>
    dispatch({
      type: GET_USERS,
      payload: response.data
    })
  );
};
