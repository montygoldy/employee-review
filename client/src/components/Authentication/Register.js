import React, { Component } from "react";
import InputField from "../Reusable/FormElements/InputField";
import { registerUserRequest } from "../../redux/Actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    isAdmin: false,
    errors: {}
  };

  onChange = e => {
    const { name, type, checked } = e.target;
    const value = type === "checkbox" ? checked : e.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password, name, isAdmin, password2 } = this.state;
    const data = {
      name,
      email,
      password,
      password2,
      isAdmin
    };
    this.props.registerUserRequest(data);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/review");
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors
      };
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="auth flexCenter">
          <div className="auth__head flexCenter">
            <h3> REGISTER NOW </h3>
          </div>
          <form action="" className="auth__form flexCenter">
            <InputField
              name="name"
              placeholder="Full name"
              type="text"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
            <InputField
              name="email"
              placeholder="email@XXXXX.com"
              type="text"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
            />
            <InputField
              name="password"
              placeholder="min. 6 characters"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
            />
            <InputField
              name="password2"
              placeholder="Confirm password"
              type="password"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.password2}
            />
            <InputField
              name="isAdmin"
              type="checkbox"
              checked={this.state.isAdmin}
              onChange={this.onChange}
              error={errors.isAdmin}
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

Register.propTypes = {
  errors: PropTypes.object,
  registerUserRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    registerUserRequest
  }
)(Register);
