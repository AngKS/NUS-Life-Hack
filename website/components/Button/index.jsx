import React from "react";
import Login from "../Login";
import "./Button.css";

function Button(props) {
  const { place, courses, community, pricing, className, loginProps } = props;

  return (
    <div className={`button-2 ${className ? className : "" || ""}`}>
      <div className="place rigsans-semi-bold-cello-36px">{place ? place : ""}</div>
      <div className="courses rigsans-semi-bold-dodger-blue-36px">{courses ? courses : ""}</div>
      <div className="community rigsans-semi-bold-cello-36px">{community ? community : ""}</div>
      <div className="pricing rigsans-semi-bold-cello-36px">{pricing ? pricing : ""}</div>
      <Login>{loginProps.children ? loginProps.children : ""}</Login>
    </div>
  );
}

export default Button;
