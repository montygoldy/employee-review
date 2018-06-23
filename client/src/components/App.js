import React, { Component } from "react";
import "../styles/css/main.css";
import Routes from "./Routes/Routes";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/Store";
import history from "./Routes/History";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
