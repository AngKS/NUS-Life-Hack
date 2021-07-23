import React from "react";
import "./ListingBlock.css";

function ListingBlock(props) {
  const { thumbnail, courseTitle, likeButton, lecture, students, time, rating, className } = props;

  return (
    <div className={`listing-block-2-1 smart-layers-pointers ${className || ""}`}>
      <img className="thumbnail-2" src={thumbnail} />
      <div className="course-title-2 rigsans-semi-bold-cello-27px">{courseTitle}</div>
      <img className="like-button-1" src={likeButton} />
      <div className="lecture-2 rigsans-regular-normal-cello-22px">{lecture}</div>
      <div className="student rigsans-regular-normal-cello-22px">{students}</div>
      <div className="time-1 rigsans-regular-normal-cello-22px">{time}</div>
      <div className="rating-1 rigsans-regular-normal-dodger-blue-22px">{rating}</div>
    </div>
  );
}

export default ListingBlock;
