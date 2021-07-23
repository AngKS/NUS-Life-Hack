import React from "react";
import "./Group9740.css";

function Group9740(props) {
  const { src } = props;

  return (
    <div className="facebook">
      <img className="logo-fb" src={src ? src : ""} />
    </div>
  );
}

export default Group9740;
