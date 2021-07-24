import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import Footer from "../Footer";
import "./Courses3.css";

function Courses3(props) {
  const {
    logo,
    place,
    courses,
    community,
    pricing,
    text19,
    overlapGroup2,
    starter,
    description,
    x399Mo,
    iMReady,
    overlapGroup3,
    theStudyOne,
    description2,
    x699Mo,
    letSGo,
    overlapGroup4,
    theMonster,
    description3,
    x999Mo,
    hitMe,
    spanText,
    spanText2,
    spanText3,
    loginProps,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="courses-3-1 screen">
        <div className="header-6">
          <Link to="/home" className="align-self-flex-end">
            <div className="logo-6 playfairdisplay-bold-dodger-blue-69px">{logo}</div>
          </Link>
          <div className="button-15">
            <div className="place-6 rigsans-semi-bold-cello-36px">{place}</div>
            <div className="courses-7 rigsans-semi-bold-cello-36px">{courses}</div>
            <div className="community-7 rigsans-semi-bold-cello-36px">{community}</div>
            <div className="pricing-6 rigsans-semi-bold-dodger-blue-36px">{pricing}</div>
            <Login>{loginProps.children}</Login>
          </div>
        </div>
        <div className="text-19 rigsans-bold-cello-58px">{text19}</div>
        <div className="flex-row-4">
          <div className="starter">
            <div className="overlap-group2-8" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="starter-1 rigsans-bold-cello-56px">{starter}</div>
              <div className="description rigsans-regular-normal-cello-30px">{description}</div>
              <div className="x399-mo rigsans-semi-bold-dodger-blue-49px">{x399Mo}</div>
              <div className="join-button">
                <div className="im-ready rigsans-semi-bold-white-30px">{iMReady}</div>
              </div>
            </div>
          </div>
          <div className="the">
            <div className="overlap-group3-6" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <div className="the-study-one">{theStudyOne}</div>
              <div className="description-1 rigsans-regular-normal-cello-30px">{description2}</div>
              <div className="x699-mo rigsans-semi-bold-dodger-blue-49px">{x699Mo}</div>
              <div className="join-button-1">
                <div className="lets-go rigsans-semi-bold-white-30px">{letSGo}</div>
              </div>
            </div>
          </div>
          <div className="the">
            <div className="overlap-group4-5" style={{ backgroundImage: `url(${overlapGroup4})` }}>
              <div className="the-monster rigsans-bold-cello-56px">{theMonster}</div>
              <div className="description-2 rigsans-regular-normal-cello-30px">{description3}</div>
              <div className="x999-mo rigsans-semi-bold-dodger-blue-49px">{x999Mo}</div>
              <div className="join-button-2">
                <div className="hit-me rigsans-semi-bold-white-30px">{hitMe}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-20">
          <span className="rigsans-medium-cello-20px">{spanText}</span>
          <span className="span1">{spanText2}</span>
          <span className="rigsans-medium-cello-20px">{spanText3}</span>
        </div>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Courses3;
