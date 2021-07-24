import React from "react";
import "./ListingBlock2.css";

function ListingBlock2(props) {
  const { thumbnail, courseTitle, likeButton, lecture, students, time, rating, className } = props;

  return (
    <div className={`listing-block-11 smart-layers-pointers ${className || ""}`}>
      <img className="thumbnail-3" src={thumbnail} />
      <div className="course-title-3 rigsans-semi-bold-cello-27px">{courseTitle}</div>
      <img className="like-button-3" src={likeButton} />
      <div className="lecture-3 rigsans-regular-normal-cello-22px">{lecture}</div>
      <div className="students-1 rigsans-regular-normal-cello-22px">{students}</div>
      <div className="time-14 rigsans-regular-normal-cello-22px">{time}</div>
      <div className="rating-3 rigsans-regular-normal-dodger-blue-22px">{rating}</div>
    </div>
  );
}

export default ListingBlock2;
