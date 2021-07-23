import React from "react";
import "./Group9743.css";

function Group9743(props) {
  const { src } = props;

  return (
    <div className="telegram">
      <div className="logo-tele" style={{ backgroundImage: `url(${src ? src : ""})` }}></div>
    </div>
  );
}

export default Group9743;
