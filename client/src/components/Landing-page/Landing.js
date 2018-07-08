import React, { Component } from "react";
import Video from "../../assets/video/Comfy.mp4";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/review");
    }
  }

  render() {
    return (
      <div className="homepage flexCenter">
        <div className="homepage__logo">
          <h1>Logo</h1>
        </div>
        <video className="homepage__video" muted loop autoPlay>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="homepage__block">
          <div className="wrapper">
            <h2> Please login to leave feedback </h2>
            <div className="flexCenter">
              <Link
                to="/register"
                style={{ marginRight: "1.5rem" }}
                className="button button--white"
              >
                Register
              </Link>
              <Link to="/login" className="button button--white">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Landing);
