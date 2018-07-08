import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminRoute = ({
  component: Component,
  layout: Layout,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        {auth.isAuthenticated && auth.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )}
      </Layout>
    )}
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AdminRoute);
