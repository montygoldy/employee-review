import React, { Component } from "react";
import "../styles/css/main.css";
import Routes from "./Routes/Routes";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/Store";
import history from "./Routes/History";
import jwt_decode from "jwt-decode";
import setAuthToken from "../redux/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../redux/Actions/authActions";
import Loader from "./Reusable/Loader";

// Check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);

  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);

  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
