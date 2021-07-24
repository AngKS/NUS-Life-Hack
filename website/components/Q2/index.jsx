import React from "react";
import "./Q2.css";

function Q2(props) {
  const { question, breifDescription, askedAt27072021, byAngKahShin, className } = props;

  return (
    <div className={`community-item-1 ${className || ""}`}>
      <div className="question-3 rigsans-medium-black-30px">{question}</div>
      <div className="overlap-group-1">
        <div className="breif-description-3 rigsans-medium-black-20px">{breifDescription}</div>
        <div className="user-info-2">
          <div className="asked-at-2-1 rigsans-medium-black-15px">{askedAt27072021}</div>
          <div className="x-shi rigsans-medium-black-15px">{byAngKahShin}</div>
        </div>
      </div>
    </div>
  );
}

export default Q2;
