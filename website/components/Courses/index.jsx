import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Login from "../Login";
import SearchBar from "../SearchBar";
import ListingBlock from "../ListingBlock";
import Footer from "../Footer";
import "./Courses.css";

function Courses(props) {
  const {
    logo,
    place,
    courses,
    community,
    pricing,
    thumbnail,
    courseTitle,
    likeButton,
    lecture,
    students,
    time,
    rating,
    thumbnail2,
    courseTitle2,
    likeButton2,
    lecture2,
    students2,
    time2,
    rating2,
    headerProps,
    loginProps,
    searchBarProps,
    listingBlockProps,
    listingBlock2Props,
    listingBlock3Props,
    listingBlock4Props,
    listingBlock5Props,
    listingBlock6Props,
    listingBlock7Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="courses-1 screen">
        <div className="overlap-group-5">
          <Header
            logo={headerProps.logo ? headerProps.logo : ""}
            place={headerProps.place ? headerProps.place : ""}
            courses={headerProps.courses ? headerProps.courses : ""}
            community={headerProps.community ? headerProps.community : ""}
            pricing={headerProps.pricing ? headerProps.pricing : ""}
            loginProps={headerProps.loginProps ? headerProps.loginProps : ""} 
            group98354Props={headerProps.group98354Props ? headerProps.group98354Props : ""}
          />
          <div className="header-1">
            <div className="flex-row-4">
              <div className="logo-1 playfairdisplay-bold-dodger-blue-69px">{logo ? logo : ""}</div>
              <div className="button-2">
                <Link to="/home">
                  <div className="place-1 rigsans-semi-bold-cello-36px">{place ? place : ""}</div>
                </Link>
                <div className="courses-2 rigsans-semi-bold-dodger-blue-36px">{courses ? courses : ""}</div>
                <div className="community-1 rigsans-semi-bold-cello-36px">{community ? community : ""}</div>
                <div className="pricing-1 rigsans-semi-bold-cello-36px">{pricing ? pricing : ""}</div>
                <Login className={loginProps.className ? loginProps.className : ""}>{loginProps.children ? loginProps.children : ""}</Login>
              </div>
            </div>
            <SearchBar {...searchBarProps ? searchBarProps : ""} />
          </div>
        </div>
        <div className="flex-row-3">
          <ListingBlock {...listingBlockProps ? listingBlockProps : ""} />
          <ListingBlock {...listingBlock2Props ? listingBlock2Props : ""} />
          <div className="listing-block-11 smart-layers-pointers">
            <img className="thumbnail-5" src={thumbnail ? thumbnail : ""} />
            <div className="course-title-5 rigsans-semi-bold-cello-27px">{courseTitle ? courseTitle : ""}</div>
            <img className="like-button-4" src={likeButton ? likeButton : ""} />
            <div className="lecture-5 rigsans-regular-normal-cello-22px">{lecture ? lecture : ""}</div>
            <div className="students-2 rigsans-regular-normal-cello-22px">{students ? students : ""}</div>
            <div className="time-16 rigsans-regular-normal-cello-22px">{time ? time : ""}</div>
            <div className="rating-4 rigsans-regular-normal-dodger-blue-22px">{rating ? rating : ""}</div>
          </div>
        </div>
        <div className="flex-row-3">
          <div className="listing-block-12 smart-layers-pointers">
            <div className="overlap-group3-1">
              <img className="thumbnail-6" src={thumbnail2 ? thumbnail2 : ""} />
              <div className="course-title-6 rigsans-semi-bold-cello-27px">{courseTitle2 ? courseTitle2 : ""}</div>
            </div>
            <img className="like-button-4" src={likeButton2 ? likeButton2 : ""} />
            <div className="lecture-6 rigsans-regular-normal-cello-22px">{lecture2 ? lecture2 : ""}</div>
            <div className="students-2 rigsans-regular-normal-cello-22px">{students2 ? students2 : ""}</div>
            <div className="time-16 rigsans-regular-normal-cello-22px">{time2 ? time2 : ""}</div>
            <div className="rating-4 rigsans-regular-normal-dodger-blue-22px">{rating2 ? rating2 : ""}</div>
          </div>
          <ListingBlock {...listingBlock3Props ? listingBlock3Props : ""} />
          <ListingBlock {...listingBlock4Props ? listingBlock4Props : ""} />
        </div>
        <div className="flex-row-5">
          <ListingBlock {...listingBlock5Props ? listingBlock5Props : ""} />
          <ListingBlock {...listingBlock6Props ? listingBlock6Props : ""} />
          <ListingBlock {...listingBlock7Props ? listingBlock7Props : ""} />
        </div>
        <Footer {...footerProps ? footerProps : ""} />
      </div>
    </div>
  );
}

export default Courses;
