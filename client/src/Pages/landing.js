import React from "react";
import img from "../Images/bg.jpg";

const landing = () => {
  const image = {
    backgroundImage: `url(${img})`,
    height: "70vh",
    backgroundSize: "cover"
  };
  const subtitle = {
    paddingTop: "250px"
  };
  return (
    <div>
      <div className="intro-section" style={image}>
        <div className="row justify-content-center text-center align-items-center">
          <div className="col-md-12" style={subtitle}>
            <span className="sub-title">Royal Wine Store</span>
            <h1>Grape Wine</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
