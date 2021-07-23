import React from "react";
import "./HelpCol.css";

function HelpCol(props) {
  const { help, text2 } = props;

  return (
    <div className="help-col">
      <div className="help rigsans-bold-white-18px">{help ? help : ""}</div>
      <div className="text-2 rigsans-regular-normal-white-14px">{text2 ? text2 : ""}</div>
    </div>
  );
}

export default HelpCol;
