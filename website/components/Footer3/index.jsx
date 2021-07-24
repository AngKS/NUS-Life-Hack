import React from "react";
import Copyright from "../Copyright";
import MoreAboutUsCol from "../MoreAboutUsCol";
import HelpCol from "../HelpCol";
import AddressCol from "../AddressCol";
import Group9740 from "../Group9740";
import Group9741 from "../Group9741";
import Group9742 from "../Group9742";
import Group9743 from "../Group9743";
import "./Footer3.css";

function Footer3(props) {
  const {
    main_Background,
    copyright_Left,
    divider,
    copyright_Right,
    className,
    group9740Props,
    group9743Props,
    group9743Props2,
    group9743Props3,
    group9740Props2,
    group9741Props,
    group9742Props,
    group9743Props4,
  } = props;

  return (
    <div className={`footer-3 ${className || ""}`}>
      <div className="overlap-group2-4">
        <img className="mainbackground-3" src={main_Background} />
        <Copyright copyright_Left={group9740Props.copyright_Left} copyright_Right={group9740Props.copyright_Right} />
        <MoreAboutUsCol moreFromUs={group9743Props.moreFromUs} text1={group9743Props.text1} />
        <HelpCol help={group9743Props2.help} text2={group9743Props2.text2} />
        <AddressCol address={group9743Props3.address} address2={group9743Props3.address2} />
        <div className="slogan-3">
          <div className="overlap-group1-5">
            <div className="social-3">
              <Group9740 src={group9740Props2.src} />
              <Group9741 src={group9741Props.src} />
              <Group9742 src={group9742Props.src} />
              <Group9743 src={group9743Props4.src} />
            </div>
            <div className="learned-3 playfairdisplay-bold-dodger-blue-48px">{copyright_Left}</div>
            <img className="divider-4" src={divider} />
            <div className="paragraph-3 rigsans-regular-normal-white-18px">{copyright_Right}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer3;
