import React from "react";
import Header from "../Header";
import Copyright from "../Copyright";
import MoreAboutUsCol from "../MoreAboutUsCol";
import HelpCol from "../HelpCol";
import AddressCol from "../AddressCol";
import Group9740 from "../Group9740";
import Group9741 from "../Group9741";
import Group9743 from "../Group9743";
import "./Courses1.css";

function Courses1(props) {
  const {
    video,
    details,
    title,
    loremIpsumDolorS,
    thumbnail,
    lessonTitle,
    presenter,
    thumbnail2,
    lessonTitle2,
    presenter2,
    thumbnail3,
    lessonTitle3,
    presenter3,
    thumbnail4,
    lessonTitle4,
    presenter4,
    main_Background,
    logoIg,
    learned,
    divider,
    paragraph,
    headerProps,
    header2Props,
    copyrightProps,
    moreAboutUsColProps,
    helpColProps,
    addressColProps,
    group9740Props,
    group9741Props,
    group9743Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="courses-1 screen">
        <div className="overlap-group">
          <Header logo={headerProps.logo ? headerProps.logo : ""} buttonProps={headerProps.buttonProps ? headerProps.buttonProps : ""} />
          <Header logo={header2Props.logo ? header2Props.logo : ""} buttonProps={header2Props.buttonProps ? header2Props.buttonProps : ""} />
        </div>
        <div className="couse">
          <div className="flex-col">
            <img className="video" src={video ? video : ""} />
            <div className="details" style={{ backgroundImage: `url(${details ? details : ""})` }}>
              <div className="title rigsans-semi-bold-cello-36px">{title ? title : ""}</div>
              <div className="lorem-ipsum-dolor-s">{loremIpsumDolorS ? loremIpsumDolorS : ""}</div>
            </div>
          </div>
          <div className="flex-col-1">
            <div className="course1">
              <img className="thumbnail" src={thumbnail ? lessonTitle : ""} />
              <div className="overlap-group1">
                <div className="lesson-title rigsans-semi-bold-cello-36px">{lessonTitle ? lessonTitle : ""}</div>
                <div className="presenter rigsans-semi-bold-cello-21px">{presenter ? presenter : ""}</div>
              </div>
            </div>
            <div className="course">
              <img className="thumbnail" src={thumbnail2 ? thumbnail2 : ""} />
              <div className="overlap-group2">
                <div className="lesson-title rigsans-semi-bold-cello-36px">{lessonTitle2 ? lessonTitle2 : ""}</div>
                <div className="presenter-1 rigsans-semi-bold-cello-21px">{presenter2 ? presenter2 : ""}</div>
              </div>
            </div>
            <div className="course">
              <img className="thumbnail" src={thumbnail3 ? thumbnail3 : ""} />
              <div className="flex-col-2">
                <div className="lesson-title-1 rigsans-semi-bold-cello-36px">{lessonTitle3 ? lessonTitle3 : ""}</div>
                <div className="presenter-2 rigsans-semi-bold-cello-21px">{presenter3 ? presenter3 : ""}</div>
              </div>
            </div>
            <div className="course">
              <img className="thumbnail" src={thumbnail4 ? thumbnail4 : ""} />
              <div className="flex-col-3">
                <div className="lesson-title-1 rigsans-semi-bold-cello-36px">{lessonTitle4 ? lessonTitle4 : ""}</div>
                <div className="presenter-3 rigsans-semi-bold-cello-21px">{presenter4 ? presenter4 : ""}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="overlap-group1-1">
            <img className="mainbackground" src={main_Background ? main_Background : ""} />
            <Copyright
              copyright_Left={copyrightProps.copyright_Left ? copyrightProps.copyright_Left : ""}
              copyright_Right={copyrightProps.copyright_Right ? copyrightProps.copyright_Right : ""}
            />
            <MoreAboutUsCol moreFromUs={moreAboutUsColProps.moreFromUs ? moreAboutUsColProps.moreFromUs : ""} text1={moreAboutUsColProps.text1 ? moreAboutUsColProps.text1 : ""} />
            <HelpCol help={helpColProps.help ? helpColProps.help : ""} text2={helpColProps.text2 ? helpColProps.text2 : ""} />
            <AddressCol address={addressColProps.address ? addressColProps.address : ""} address2={addressColProps.address2 ? addressColProps.address2 : ""} />
            <div className="slogan">
              <div className="overlap-group2-1">
                <div className="social">
                  <Group9740 src={group9740Props.src ? group9740Props.src : ""} />
                  <Group9741 src={group9741Props.src ? group9741Props.src : ""} />
                  <div className="ig">
                    <img className="logo-ig" src={logoIg ? logoIg : ""} />
                  </div>
                  <Group9743 src={group9743Props.src ? group9743Props.src : ""} />
                </div>
                <div className="learned playfairdisplay-bold-dodger-blue-48px">{learned ? learned : ""}</div>
                <img className="divider" src={divider ? divider : ""} />
                <div className="paragraph rigsans-regular-normal-white-18px">{paragraph ? paragraph : ""}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses1;
