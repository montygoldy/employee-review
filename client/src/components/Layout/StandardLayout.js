import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const StandardLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default StandardLayout;
