import React from "react";
import "./ListingBlock3.css";

function ListingBlock3(props) {
  const { thumbnail, courseTitle, likeButton, lecture, students, time, rating, className } = props;

  return (
    <div className={`listing-block-14 smart-layers-pointers ${className || ""}`}>
      <div className="overlap-group1-4">
        <img className="thumbnail-6" src={thumbnail} />
        <div className="course-title-6 rigsans-semi-bold-cello-27px">{courseTitle}</div>
      </div>
      <img className="like-button-6" src={likeButton} />
      <div className="lecture-6 rigsans-regular-normal-cello-22px">{lecture}</div>
      <div className="students-4 rigsans-regular-normal-cello-22px">{students}</div>
      <div className="time-17 rigsans-regular-normal-cello-22px">{time}</div>
      <div className="rating-6 rigsans-regular-normal-dodger-blue-22px">{rating}</div>
    </div>
  );
}

export default ListingBlock3;
