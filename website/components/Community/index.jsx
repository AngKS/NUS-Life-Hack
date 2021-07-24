import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Login from "../Login";
import Q2 from "../Q2";
import UserInfo from "../UserInfo";
import Footer from "../Footer";
import "./Community.css";

function Community(props) {
  const {
    logo,
    place,
    courses,
    community,
    pricing,
    rectangle143,
    path2922,
    search,
    text3,
    question,
    breifDescription,
    askedAt29072021,
    byShiTingxiao,
    question2,
    breifDescription2,
    askedAt24072021,
    byCodyHan,
    question3,
    breifDescription3,
    question4,
    breifDescription4,
    headerProps,
    loginProps,
    q2Props,
    userInfoProps,
    userInfo2Props,
    q22Props,
    footerProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="community screen">
        <div className="overlap-group">
          <Header logo={headerProps.logo} buttonProps={headerProps.buttonProps} />
          <div className="header">
            <Link to="/home" className="align-self-flex-end">
              <div className="logo playfairdisplay-bold-dodger-blue-69px">{logo}</div>
            </Link>
            <div className="button">
              <Link to="/home">
                <div className="place rigsans-semi-bold-cello-36px">{place}</div>
              </Link>
              <Link to="/courses">
                <div className="courses rigsans-semi-bold-cello-36px">{courses}</div>
              </Link>
              <div className="community-1 rigsans-semi-bold-dodger-blue-36px">{community}</div>
              <Link to="/courses-3">
                <div className="pricing rigsans-semi-bold-cello-36px">{pricing}</div>
              </Link>
              <Login>{loginProps.children}</Login>
            </div>
          </div>
        </div>
        <div className="question-1">
          <div className="overlap-group3">
            <img className="rectangle-143" src={rectangle143} />
            <img className="path-2922" src={path2922} />
            <div className="search">{search}</div>
            <div className="text-3">{text3}</div>
          </div>
        </div>
        <div className="q1">
          <div className="question rigsans-medium-black-30px">{question}</div>
          <div className="overlap-group4">
            <div className="breif-description rigsans-medium-black-20px">{breifDescription}</div>
            <div className="user-info">
              <div className="asked-at-2 rigsans-medium-black-15px">{askedAt29072021}</div>
              <div className="by-shi-tingxiao rigsans-medium-black-15px">{byShiTingxiao}</div>
            </div>
          </div>
        </div>
        <Q2
          question={q2Props.question}
          breifDescription={q2Props.breifDescription}
          askedAt27072021={q2Props.askedAt27072021}
          byAngKahShin={q2Props.byAngKahShin}
        />
        <div className="q3">
          <div className="question rigsans-medium-black-30px">{question2}</div>
          <div className="overlap-group6">
            <div className="breif-description rigsans-medium-black-20px">{breifDescription2}</div>
            <div className="user-info-1">
              <div className="asked-at-2 rigsans-medium-black-15px">{askedAt24072021}</div>
              <div className="by-cody-han rigsans-medium-black-15px">{byCodyHan}</div>
            </div>
          </div>
        </div>
        <div className="q4">
          <div className="question rigsans-medium-black-30px">{question3}</div>
          <div className="breif-description-1 rigsans-medium-black-20px">{breifDescription3}</div>
          <UserInfo askedAt23072021={userInfoProps.askedAt23072021} byChangYongFu={userInfoProps.byChangYongFu} />
        </div>
        <div className="q5">
          <div className="flex-col">
            <div className="question-2 rigsans-medium-black-30px">{question4}</div>
            <div className="breif-description-2 rigsans-medium-black-20px">{breifDescription4}</div>
          </div>
          <UserInfo
            askedAt23072021={userInfo2Props.askedAt23072021}
            byChangYongFu={userInfo2Props.byChangYongFu}
            className={userInfo2Props.className}
          />
        </div>
        <Q2
          question={q22Props.question}
          breifDescription={q22Props.breifDescription}
          askedAt27072021={q22Props.askedAt27072021}
          byAngKahShin={q22Props.byAngKahShin}
          className={q22Props.className}
        />
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default Community;
