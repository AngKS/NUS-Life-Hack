import React from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import "./Header3.css";

function Header3(props) {
  const { logo, loginProps, group98354Props } = props;

  return (
    <div className="header-3">
      <div className="flex-row-6">
        <div className="logo-3 playfairdisplay-bold-dodger-blue-69px">{logo ? logo : ""}</div>
        <Button
          place={loginProps.place ? loginProps.place : ""}
          courses={loginProps.courses ? loginProps.courses : ""}
          community={loginProps.community ? loginProps.community : ""}
          pricing={loginProps.pricing ? loginProps.pricing : ""}
          className={loginProps.className ? loginProps.className : ""}
          loginProps={loginProps.loginProps ? loginProps.loginProps : ""}
        />
      </div>
      <SearchBar {...group98354Props ? group98354Props : ""} />
    </div>
  );
}

export default Header3;
