import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

const StandardLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

StandardLayout.propTypes = {
  children: PropTypes.object
};

export default StandardLayout;
