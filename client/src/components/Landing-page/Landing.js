import React from "react";
import Video from "../../assets/video/Comfy.mp4";
import { Link } from "react-router-dom";

const Landing = () => {
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
            <Link to="/login" className="button button--white">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
