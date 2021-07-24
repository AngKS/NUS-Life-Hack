import React from "react";
import "./UserInfo.css";

function UserInfo(props) {
  const { askedAt23072021, byChangYongFu, className } = props;

  return (
    <div className={`user-info-3 ${className || ""}`}>
      <div className="asked-at-2-2 rigsans-medium-black-15px">{askedAt23072021}</div>
      <div className="by-chang-yong-fu rigsans-medium-black-15px">{byChangYongFu}</div>
    </div>
  );
}

export default UserInfo;
