import React from "react";
import "./Group9831.css";

function Group9831(props) {
  const { line3, line4, className } = props;

  return (
    <div className={`group-9831-4 ${className ? className : "" || ""}`}>
      <div className="overlap-group-7">
        <img className="line-3-1" src={line3 ? line3 : ""} />
        <img className="line-4-1" src={line4 ? line4 : ""} />
      </div>
    </div>
  );
}

export default Group9831;
