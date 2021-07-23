import React from "react";
import Group9740 from "../Group9740";
import Group9741 from "../Group9741";
import Group9742 from "../Group9742";
import Group9743 from "../Group9743";
import "./Footer.css";

function Footer(props) {
  const {
    main_Background,
    copyright_Left,
    copyright_Right,
    moreFromUs,
    text10,
    help,
    text11,
    address,
    address2,
    learned,
    divider,
    paragraph,
    className,
    group9740Props,
    group9741Props,
    group9742Props,
    group9743Props,
  } = props;

  return (
    <div className={`footer ${className ? className : "" || ""}`}>
      <div className="overlap-group7">
        <img className="mainbackground" src={main_Background ? main_Background : ""} />
        <div className="copyright">
          <div className="copyrightleft notosanscjkkr-regular-normal-white-14px">{copyright_Left ? copyright_Left : ""}</div>
          <p className="copyrightright notosanscjkkr-regular-normal-white-14px">{copyright_Right ? copyright_Right : ""}</p>
        </div>
        <div className="more-about-us-col">
          <div className="more-from-us rigsans-bold-white-18px">{moreFromUs ? moreFromUs : ""}</div>
          <div className="text-10 rigsans-regular-normal-white-14px">{text10 ? text10 : ""}</div>
        </div>
        <div className="help-col">
          <div className="help rigsans-bold-white-18px">{help ? help : ""}</div>
          <div className="text-11 rigsans-regular-normal-white-14px">{text11 ? text11 : ""}</div>
        </div>
        <div className="address-col">
          <div className="address-1 rigsans-bold-white-18px">{address ? address : ""}</div>
          <p className="address-2 rigsans-regular-normal-white-14px">{address2 ? address2 : ""}</p>
        </div>
        <div className="slogan">
          <div className="overlap-group-3">
            <div className="social">
              <Group9740 src={group9740Props.src ? group9740Props.src : ""} />
              <Group9741 src={group9741Props.src ? group9741Props.src : ""} />
              <Group9742 src={group9742Props.src ? group9742Props.src : ""} />
              <Group9743 src={group9743Props.src ? group9743Props.src : ""} />
            </div>
            <div className="learned playfairdisplay-bold-dodger-blue-48px">{learned ? learned : ""}</div>
            <img className="divider-1" src={divider ? divider : ""} />
            <div className="paragraph rigsans-regular-normal-white-18px">{paragraph ? paragraph : ""}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
