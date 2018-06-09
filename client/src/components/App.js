import React, { Component } from "react";
import "../styles/css/main.css";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
