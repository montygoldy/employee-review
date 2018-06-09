import React, { Component } from "react";
import InputField from "../Reusable/FormElements/InputField";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="auth flexCenter">
          <div className="auth__head flexCenter">
            <h3> LOGIN NOW </h3>
          </div>
          <form action="" className="auth__form flexCenter">
            <InputField
              name="email"
              placeholder="email@XXXXX.com"
              type="text"
              value={this.state.email}
              onChange={this.onChange}
            />
            <InputField
              name="password"
              placeholder="min. 6 characters"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button className="button button--dark">Sign In Now</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
