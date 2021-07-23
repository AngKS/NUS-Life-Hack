import React from "react";
import "./MoreAboutUsCol.css";

function MoreAboutUsCol(props) {
  const { moreFromUs, text1 } = props;

  return (
    <div className="more-about-us-col">
      <div className="more-from-us rigsans-bold-white-18px">{moreFromUs ? moreFromUs : ""}</div>
      <div className="text-1 rigsans-regular-normal-white-14px">{text1 ? text1 : ""}</div>
    </div>
  );
}

export default MoreAboutUsCol;
