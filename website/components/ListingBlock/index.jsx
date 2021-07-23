import React from "react";
import "./ListingBlock.css";

function ListingBlock(props) {
  const { thumbnail, courseTitle, likeButton, lecture, students, time, rating, className } = props;

  return (
    <div className={`listing-block-9 smart-layers-pointers ${className ? className : "" || ""}`}>
      <img className="thumbnail-2" src={thumbnail ? thumbnail : ""} />
      <div className="course-title-2 rigsans-semi-bold-cello-27px">{courseTitle ? courseTitle : ""}</div>
      <img className="like-button-1" src={likeButton ? likeButton : ""} />
      <div className="lecture-2 rigsans-regular-normal-cello-22px">{lecture ? lecture : ""}</div>
      <div className="students-1 rigsans-regular-normal-cello-22px">{students ? students : ""}</div>
      <div className="time-1 rigsans-regular-normal-cello-22px">{time ? time : ""}</div>
      <div className="rating-1 rigsans-regular-normal-dodger-blue-22px">{rating ? rating : ""}</div>
    </div>
  );
}

export default ListingBlock;
