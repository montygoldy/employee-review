import React, { Component } from "react";
import "../styles/css/main.css";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
