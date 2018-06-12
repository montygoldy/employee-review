import React, { Component } from "react";
import InputField from "../Reusable/FormElements/InputField";
import { loginUser } from "../../redux/Actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    this.props.loginUser(data);
    this.props.history.push("/review");
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
            <button className="button button--dark" onClick={this.onSubmit}>
              Sign In Now
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(withRouter(Login));
