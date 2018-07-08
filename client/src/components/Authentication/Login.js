import React, { Component } from "react";
import InputField from "../Reusable/FormElements/InputField";
import { loginUserRequest } from "../../redux/Actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import history from "../Routes/History";

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
    this.props.loginUserRequest(data);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      history.push("/review");
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
            <h3> LOGIN NOW </h3>
          </div>
          <form action="" className="auth__form flexCenter">
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
            <button className="button button--dark" onClick={this.onSubmit}>
              Sign In Now
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  errors: PropTypes.object,
  loginUserRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUserRequest }
)(Login);
