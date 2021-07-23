import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import SearchBar from "../SearchBar";
import ListingBlock from "../ListingBlock";
import Footer from "../Footer";
import "./Home1.css";

function Home1(props) {
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
      <div className="home-1 screen">
        <div className="header-3">
          <div className="flex-row-8">
            <div className="logo-3 playfairdisplay-bold-dodger-blue-69px">{logo ? logo : ""}</div>
            <div className="button-12">
              <Link to="/home">
                <div className="place-3 rigsans-semi-bold-cello-36px">{place ? place : ""}</div>
              </Link>
              <div className="courses-4 rigsans-semi-bold-dodger-blue-36px">{courses ? courses : ""}</div>
              <div className="community-3 rigsans-semi-bold-cello-36px">{community ? community : ""}</div>
              <div className="pricing-3 rigsans-semi-bold-cello-36px">{pricing ? pricing : ""}</div>
              <Login className={loginProps.className ? loginProps.className : ""}>{loginProps.children ? loginProps.children : ""}</Login>
            </div>
          </div>
          <SearchBar {...searchBarProps ? searchBarProps : ""} />
        </div>
        <div className="flex-row-7">
          <ListingBlock {...listingBlockProps ? listingBlockProps : ""} />
          <ListingBlock {...listingBlock2Props ? listingBlock2Props : ""} />
          <div className="listing-block-13 smart-layers-pointers">
            <img className="thumbnail-7" src={thumbnail ? thumbnail : ""} />
            <div className="course-title-7 rigsans-semi-bold-cello-27px">{courseTitle ? courseTitle : ""}</div>
            <img className="like-button-5" src={likeButton ? likeButton : ""} />
            <div className="lecture-7 rigsans-regular-normal-cello-22px">{lecture ? lecture : ""}</div>
            <div className="students-3 rigsans-regular-normal-cello-22px">{students ? students : ""}</div>
            <div className="time-17 rigsans-regular-normal-cello-22px">{time ? time : ""}</div>
            <div className="rating-5 rigsans-regular-normal-dodger-blue-22px">{rating ? rating : ""}</div>
          </div>
        </div>
        <div className="flex-row-7">
          <div className="listing-block-14 smart-layers-pointers">
            <div className="overlap-group2-5">
              <img className="thumbnail-8" src={thumbnail2 ? thumbnail : ""} />
              <div className="course-title-8 rigsans-semi-bold-cello-27px">{courseTitle2 ? courseTitle2 : ""}</div>
            </div>
            <img className="like-button-5" src={likeButton2 ? likeButton2 : ""} />
            <div className="lecture-8 rigsans-regular-normal-cello-22px">{lecture2 ? lecture2 : ""}</div>
            <div className="students-3 rigsans-regular-normal-cello-22px">{students2 ? students2 : ""}</div>
            <div className="time-17 rigsans-regular-normal-cello-22px">{time2 ? time2 : ""}</div>
            <div className="rating-5 rigsans-regular-normal-dodger-blue-22px">{rating2 ? rating2 : ""}</div>
          </div>
          <ListingBlock {...listingBlock3Props ? listingBlock3Props : ""} />
          <ListingBlock {...listingBlock4Props ? listingBlock4Props : ""} />
        </div>
        <div className="flex-row-9">
          <ListingBlock {...listingBlock5Props ? listingBlock5Props : ""} />
          <ListingBlock {...listingBlock6Props ? listingBlock6Props : ""} />
          <ListingBlock {...listingBlock7Props ? listingBlock7Props : ""} />
        </div>
        <Footer {...footerProps ? footerProps : ""} />
      </div>
    </div>
  );
}

export default Home1;
