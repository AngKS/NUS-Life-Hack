import React from "react";
import Login from "../Login";
import SearchBar from "../SearchBar";
import "./Header.css";

function Header(props) {
  const { logo, place, courses, community, pricing, loginProps, group98354Props } = props;

  return (
    <div className="header-2">
      <div className="flex-row-6">
        <div className="logo-2 playfairdisplay-bold-dodger-blue-69px">{logo ? logo : ""}</div>
        <div className="button-3">
          <div className="place-2 rigsans-semi-bold-cello-36px">{place ? place : ""}</div>
          <div className="courses-3 rigsans-semi-bold-dodger-blue-36px">{courses ? courses : ""}</div>
          <div className="community-2 rigsans-semi-bold-cello-36px">{community ? community : ""}</div>
          <div className="pricing-2 rigsans-semi-bold-cello-36px">{pricing ? pricing : ""}</div>
          <Login className={loginProps.className ? loginProps.className : ""}>{loginProps.children ? loginProps.children : ""}</Login>
        </div>
      </div>
      <SearchBar {...group98354Props ? group98354Props : ""} />
    </div>
  );
}

export default Header;
