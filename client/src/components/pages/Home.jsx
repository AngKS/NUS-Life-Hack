import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="site">
      <Navbar />
      <div className="container-center-horizontal">
        <div className="home screen">
          <div className="flex-row">
            <div className="flex-col">
              <div className="welcome-title">
                <div className="overlap-group-1">
                  <div className="today-is-the-day rigsans-medium-black-49px">Today is the day</div>
                  <img className="divider" src={divider ? divider : ""} />
                  <div className="today-is-the-day rigsans-medium-black-49px">
                    {todayIsTheDay2 ? todayIsTheDay2 : ""}
                  </div>
                </div>
                <div className="text-1 rigsans-medium-mine-shaft-23px">
                  {text1 ? text1 : ""}
                </div>
              </div>
              <div className="sign-up">
                <div className="group-3 border-1px-dove-gray">
                  <input
                    className="your-email-address rigsans-medium-mine-shaft-23px"
                    name="your-email-address1"
                    placeholder={inputPlaceholder ? inputPlaceholder : ""}
                    type={inputType ? inputType : ""}
                  />
                </div>
                <div className="group-5">
                  <div className="free-sign-up">
                    {freeSignUp ? freeSignUp : ""}
                  </div>
                </div>
                <p className="text-2">
                  <span className="rigsans-semi-bold-concord-10px">
                    {spanText ? spanText : ""}
                  </span>
                  <span className="span-1 rigsans-semi-bold-concord-10px">
                    {spanText2 ? spanText2 : ""}
                  </span>
                  <span className="rigsans-semi-bold-concord-10px">
                    {spanText3 ? spanText3 : ""}
                  </span>
                  <span className="span-1 rigsans-semi-bold-concord-10px">
                    {spanText4 ? spanText4 : ""}
                  </span>
                </p>
              </div>
            </div>
            <div className="pictures">
              <div className="overlap-group1">
                <div className="o-level smart-layers-pointers">
                  <div
                    className="overlap-group"
                    style={{
                      backgroundImage: `url(${
                        overlapGroup ? overlapGroup : ""
                      })`,
                    }}
                  >
                    <div className="gradient"></div>
                    <div className="o-level-grads rigsans-semi-bold-white-20px">
                      {oLevelGrads ? oLevelGrads : ""}
                    </div>
                    <img className="line-1" src={line1 ? line1 : ""} />
                    <div className="text-3 rigsans-semi-bold-white-10px">
                      {text3 ? text3 : ""}
                    </div>
                    <div className="name rigsans-semi-bold-white-22px">
                      {name ? name : ""}
                    </div>
                  </div>
                </div>
                <div className="a-level smart-layers-pointers">
                  <div
                    className="overlap-group"
                    style={{
                      backgroundImage: `url(${
                        overlapGroup2 ? overlapGroup2 : ""
                      })`,
                    }}
                  >
                    <div className="gradient-1"></div>
                    <div className="a-level-grads rigsans-semi-bold-white-20px">
                      {aLevelGrads ? aLevelGrads : ""}
                    </div>
                    <img className="line-2" src={line2 ? line2 : ""} />
                    <div className="text-4 rigsans-semi-bold-white-10px">
                      {text4 ? text4 : ""}
                    </div>
                    <div className="name-1 rigsans-semi-bold-white-22px">
                      {name2 ? name2 : ""}
                    </div>
                  </div>
                </div>
                <div className="poly smart-layers-pointers">
                  <div
                    className="overlap-group"
                    style={{
                      backgroundImage: `url(${
                        overlapGroup3 ? overlapGroup3 : ""
                      })`,
                    }}
                  >
                    <div className="gradient-2"></div>
                    <div className="x-grads rigsans-semi-bold-white-20px">
                      {polyGrads ? polyGrads : ""}
                    </div>
                    <img className="line-3" src={line3 ? line3 : ""} />
                    <div className="name-2 rigsans-semi-bold-white-22px">
                      {name3 ? name3 : ""}
                    </div>
                    <div className="start-up-young-star rigsans-semi-bold-white-10px">
                      {startUpYoungStar ? startUpYoungStar : ""}
                    </div>
                  </div>
                </div>
                <div className="uni smart-layers-pointers">
                  <div
                    className="overlap-group4"
                    style={{
                      backgroundImage: `url(${
                        overlapGroup4 ? overlapGroup4 : ""
                      })`,
                    }}
                  >
                    <img
                      className="gradient-3"
                      src={gradient ? gradient : ""}
                    />
                    <div className="x-grads rigsans-semi-bold-white-20px">
                      {uniGrads ? uniGrads : ""}
                    </div>
                    <img className="line-4" src={line4} />
                    <div className="name-3 rigsans-semi-bold-white-22px">
                      {name4 ? name4 : ""}
                    </div>
                    <div className="text-5 rigsans-semi-bold-white-10px">
                      {text5 ? text5 : ""}
                    </div>
                  </div>
                </div>
                <div className="psle smart-layers-pointers">
                  <div
                    className="overlap-group"
                    style={{
                      backgroundImage: `url(${
                        overlapGroup5 ? overlapGroup5 : ""
                      })`,
                    }}
                  >
                    <img
                      className="gradient-4"
                      src={gradient2 ? gradient2 : ""}
                    />
                    <div className="psle-grads rigsans-semi-bold-white-20px">
                      {psleGrads ? psleGrads : ""}
                    </div>
                    <img className="path-2" src={path2 ? path2 : ""} />
                    <div className="text-6 rigsans-semi-bold-white-10px">
                      {text6 ? text6 : ""}
                    </div>
                    <div className="name-4 rigsans-semi-bold-white-22px">
                      {name5 ? name5 : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-7 rigsans-bold-cello-58px">
            {text7 ? text7 : ""}
          </div>
          <div className="features">
            <div className="features-block-1">
              <div
                className="overlap-group-2"
                style={{
                  backgroundImage: `url(${overlapGroup6 ? overlapGroup6 : ""})`,
                }}
              >
                <div className="x99-classes rigsans-semi-bold-dodger-blue-36px">
                  {x99Classes ? x99Classes : ""}
                </div>
                <div className="text-8 rigsans-medium-dodger-blue-18px">
                  {text8 ? text8 : ""}
                </div>
              </div>
            </div>
            <div className="features-block">
              <div
                className="overlap-group1-1"
                style={{
                  backgroundImage: `url(${overlapGroup1 ? overlapGroup1 : ""})`,
                }}
              >
                <div className="x80-subject rigsans-semi-bold-dodger-blue-36px">
                  {x80Subject ? x80Subject : ""}
                </div>
                <div className="text-9 rigsans-medium-dodger-blue-18px">
                  {text9 ? text9 : ""}
                </div>
              </div>
            </div>
            <div className="features-block">
              <div
                className="overlap-group2"
                style={{
                  backgroundImage: `url(${
                    overlapGroup22 ? overlapGroup22 : ""
                  })`,
                }}
              >
                <div className="x20-lessons rigsans-semi-bold-dodger-blue-36px">
                  {x20Lessons ? x20Lessons : ""}
                </div>
                <div className="average-per-class rigsans-medium-dodger-blue-18px">
                  {averagePerClass ? averagePerClass : ""}
                </div>
              </div>
            </div>
            <div className="features-block">
              <div
                className="overlap-group3"
                style={{
                  backgroundImage: `url(${
                    overlapGroup32 ? overlapGroup32 : ""
                  })`,
                }}
              >
                <div className="address rigsans-semi-bold-dodger-blue-36px">
                  {address ? address : ""}
                </div>
                <div className="average-per-lesson rigsans-medium-dodger-blue-18px">
                  {averagePerLesson ? averagePerLesson : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="guess-what-you-like rigsans-bold-cello-58px">
            {guessWhatYouLike ? guessWhatYouLike : ""}
          </div>
          <div className="flex-row-1">
            <ListingBlock {...(listingBlockProps ? listingBlockProps : "")} />
            <ListingBlock {...(listingBlock2Props ? listingBlock2Props : "")} />
            <div className="listing-block smart-layers-pointers">
              <img className="thumbnail" src={thumbnail ? thumbnail : ""} />
              <div className="course-title rigsans-semi-bold-cello-27px">
                {courseTitle ? courseTitle : ""}
              </div>
              <img className="like-button" src={likeButton ? likeButton : ""} />
              <div className="lecture rigsans-regular-normal-cello-22px">
                {lecture ? lecture : ""}
              </div>
              <div className="students rigsans-regular-normal-cello-22px">
                {students ? students : ""}
              </div>
              <div className="time rigsans-regular-normal-cello-22px">
                {time ? time : ""}
              </div>
              <div className="rating rigsans-regular-normal-dodger-blue-22px">
                {rating ? rating : ""}
              </div>
            </div>
          </div>
          <div className="flex-row-2">
            <div className="listing-block-1 smart-layers-pointers">
              <div className="overlap-group6">
                <img
                  className="thumbnail-1"
                  src={thumbnail2 ? thumbnail2 : ""}
                />
                <div className="course-title-1 rigsans-semi-bold-cello-27px">
                  {courseTitle2 ? courseTitle2 : ""}
                </div>
              </div>
              <img
                className="like-button"
                src={likeButton2 ? likeButton2 : ""}
              />
              <div className="lecture-1 rigsans-regular-normal-cello-22px">
                {lecture2 ? lecture2 : ""}
              </div>
              <div className="students rigsans-regular-normal-cello-22px">
                {students2 ? students2 : ""}
              </div>
              <div className="time rigsans-regular-normal-cello-22px">
                {time2 ? time2 : ""}
              </div>
              <div className="rating rigsans-regular-normal-dodger-blue-22px">
                {rating2 ? rating2 : ""}
              </div>
            </div>
            <ListingBlock {...(listingBlock3Props ? listingBlock3Props : "")} />
            <ListingBlock {...(listingBlock4Props ? listingBlock4Props : "")} />
          </div>
          <div className="s-ign-up-button-footer">
            <div className="button-1">{button ? button : ""}</div>
          </div>
          <Footer {...(footerProps ? footerProps : "")} />
        </div>
      </div>
      );
    </div>
  );
}

export default Home;
