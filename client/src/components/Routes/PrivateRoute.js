import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Private Route
const PrivateRoute = ({
  component: Component,
  layout: Layout,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        {auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )}
      </Layout>
    )}
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
