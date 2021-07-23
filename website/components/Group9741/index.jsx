import React from "react";
import "./Group9741.css";

function Group9741(props) {
  const { src } = props;

  return (
    <div className="twitter">
      <img className="logo-twitter" src={src ? src : ""} />
    </div>
  );
}

export default Group9741;
