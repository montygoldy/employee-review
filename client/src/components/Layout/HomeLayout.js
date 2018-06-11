import React from "react";
import PropTypes from "prop-types";

const HomeLayout = ({ children }) => {
  console.log(children);
  return <React.Fragment>{children}</React.Fragment>;
};

HomeLayout.propTypes = {
  children: PropTypes.object
};

export default HomeLayout;
