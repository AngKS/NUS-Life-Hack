import React from "react";
import Group9835 from "../Group9835";
import "./SearchBar.css";

function SearchBar(props) {
  const {
    searchBox,
    inputType,
    inputPlaceholder,
    path2920,
    path2921,
    level,
    any,
    subject,
    any2,
    duration,
    any3,
    uploadingTime,
    any4,
    moreFilter,
    moreFilter2,
    group9835Props,
    group98352Props,
    group98353Props,
    group98354Props,
    group98355Props,
  } = props;

  return (
    <div className="search-bar">
      <div className="overlap-group1-4">
        <img className="search-box" src={searchBox  ? searchBox : ""} />
        <input
          className="search-course rigsans-regular-normal-cello-29px"
          name="search-course1"
          placeholder={inputPlaceholder  ? inputPlaceholder : ""}
          type={inputType  ? inputType : ""}
        />
        <div className="search-button">
          <div className="overlap-group2-2">
            <img className="path-2920" src={path2920 ? path2920 : ""} />
            <img className="path-2921" src={path2921 ? path2921 : ""} />
          </div>
        </div>
        <div className="level border-1px-dove-gray">
          <div className="overlap-group3-2">
            <div className="level-1 rigsans-regular-normal-cello-22px">{level ? level : ""}</div>
            <div className="any rigsans-regular-normal-chicago-18px">{any ? any : ""}</div>
          </div>
          <Group9835 group9831Props={group9835Props.group9831Props ? group9835Props.group9831Props : ""} group98312Props={group9835Props.group98312Props ? group9835Props.group98312Props : ""} />
        </div>
        <div className="subject border-1px-dove-gray">
          <div className="overlap-group6-1">
            <div className="subject-1 rigsans-regular-normal-cello-22px">{subject ? subject : ""}</div>
            <div className="any-1 rigsans-regular-normal-chicago-18px">{any2 ? any2 : ""}</div>
          </div>
          <Group9835
            className={group98352Props.className ? group98352Props.className : ""}
            group9831Props={group98352Props.group9831Props ? group98352Props.group9831Props : ""}
            group98312Props={group98352Props.group98312Props ? group98352Props.group98312Props : ""}
          />
        </div>
        <div className="duration border-1px-dove-gray">
          <div className="overlap-group7-1">
            <div className="duration-1 rigsans-regular-normal-cello-22px">{duration ? duration : ""}</div>
            <div className="any-2 rigsans-regular-normal-chicago-18px">{any3 ? any3 : ""}</div>
          </div>
          <Group9835
            className={group98353Props.className ? group98353Props.className : ""}
            group9831Props={group98353Props.group9831Props ? group98353Props.group9831Props : ""}
            group98312Props={group98353Props.group98312Props ? group98353Props.group98312Props : ""}
          />
        </div>
        <div className="upload-time border-1px-dove-gray">
          <div className="overlap-group8">
            <div className="uploading-time rigsans-regular-normal-cello-22px">{uploadingTime ? uploadingTime : ""}</div>
            <div className="any-3 rigsans-regular-normal-chicago-18px">{any4 ? any4 : ""}</div>
            <Group9835
              className={group98354Props.className ? group98354Props.className : ""}
              group9831Props={group98354Props.group9831Props ? group98354Props.group9831Props : ""}
              group98312Props={group98354Props.group98312Props ? group98354Props.group98312Props : ""}
            />
          </div>
        </div>
      </div>
      <div className="more-filter" style={{ backgroundImage: `url(${moreFilter ? moreFilter : ""})` }}>
        <div className="more-filter-1 rigsans-regular-normal-cello-22px">{moreFilter2 ? moreFilter2 : ""}</div>
        <Group9835
          className={group98355Props.className ? group98355Props.className : ""}
          group9831Props={group98355Props.group9831Props ? group98355Props.group9831Props : ""}
          group98312Props={group98355Props.group98312Props ? group98355Props.group98312Props : ""}
        />
      </div>
    </div>
  );
}

export default SearchBar;
