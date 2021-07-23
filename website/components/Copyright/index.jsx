import React from "react";
import "./Copyright.css";

function Copyright(props) {
  const { copyright_Left, copyright_Right } = props;

  return (
    <div className="copyright">
      <div className="copyrightleft notosanscjkkr-regular-normal-white-14px">{copyright_Left ? copyright_Left : ""}</div>
      <p className="copyrightright notosanscjkkr-regular-normal-white-14px">{copyright_Right ? copyright_Right : ""}</p>
    </div>
  );
}

export default Copyright;
