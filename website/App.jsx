import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Home1 from "./components/Home1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home {...homeData} />
        </Route>
        <Route path="/courses">
          <Courses {...coursesData} />
        </Route>
        <Route path="/:path(|home-1)">
          <Home1 {...home1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const loginData = {
    children: "LOGIN",
};

const listingBlockData = {
    thumbnail: "/img/house-thumbnail@1x.png",
    courseTitle: <>Full stack Web Development<br />with React and PHP</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>John Harper<br />Singapore Polytechnic</>,
    students: "567 Students",
    time: "32h 25m",
    rating: "4.8 Rating",
};

const listingBlock2Data = {
    thumbnail: "/img/house-thumbnail-1@1x.png",
    courseTitle: <>2021 Complete Python <br />Bootcamp Zero to Hero</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Krilly Zanteck<br />NUS Current Student</>,
    students: "985 Students",
    time: "20h 45m",
    rating: "4.9 Rating",
    className: "listing-block-2",
};

const listingBlock3Data = {
    thumbnail: "/img/house-thumbnail-4@1x.png",
    courseTitle: <>Data Visualization for <br />Statistical Analysis</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Shi Tingxiao<br />Singapore Polytechnic</>,
    students: "251 Students",
    time: "5h 40m",
    rating: "4.8 Rating",
    className: "listing-block-2",
};

const listingBlock4Data = {
    thumbnail: "/img/house-thumbnail-5@1x.png",
    courseTitle: <>Mathmatics for <br />Artificial Intellegence</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Cody Tan<br />Ngee Ann Polytechnic</>,
    students: "340 Students",
    time: "3h 30m",
    rating: "4.9 Rating",
    className: "listing-block-10",
};

const group9740Data = {
    src: "/img/logo-fb@1x.png",
};

const group9741Data = {
    src: "/img/logo-twitter@1x.png",
};

const group9742Data = {
    src: "/img/file-@1x.png",
};

const group9743Data = {
    src: "/img/file-@1x.png",
};

const footerData = {
    main_Background: "/img/path-2954@1x.png",
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
    moreFromUs: "More from us",
    text10: <>About<br />Partners<br />Contact</>,
    help: "Help?",
    text11: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
    learned: "Learned",
    divider: "/img/path-6406@1x.png",
    paragraph: "Find your next home within seconds",
    group9740Props: group9740Data,
    group9741Props: group9741Data,
    group9742Props: group9742Data,
    group9743Props: group9743Data,
};

const homeData = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    todayIsTheDay: "Today is the day",
    divider: "/img/path-1@1x.png",
    todayIsTheDay2: "Today is the day",
    text1: "To learn from the best in town",
    inputType: "text",
    inputPlaceholder: "Your email address...",
    freeSignUp: "FREE SIGN UP",
    spanText: <>By sharing your email, you agree to our <br /></>,
    spanText2: "Terms and Conditions",
    spanText3: " and ",
    spanText4: "Privacy Policy",
    overlapGroup: "/img/van-tay-media-pc-hmxz0e-w-unsplash@1x.png",
    oLevelGrads: "O-level Grads",
    line1: "/img/line-1@1x.png",
    text3: "The Straight A Student",
    name: "Emma Huan",
    overlapGroup2: "/img/jeswin-thomas-h5fholbzt-m-unsplash@1x.png",
    aLevelGrads: "A-Level Grads",
    line2: "/img/line-2@1x.png",
    text4: "Full Scholarship winner",
    name2: "Megan Tan",
    overlapGroup3: "/img/jeswin-thomas-8nhqx4zi9wk-unsplash@1x.png",
    polyGrads: "Poly Grads",
    line3: "/img/line-3@1x.png",
    name3: "Christian Jowe",
    startUpYoungStar: "Start up young star",
    overlapGroup4: "/img/linkedin-sales-solutions-ei50zda-l8y-unsplash@1x.png",
    gradient: "/img/gradient@1x.png",
    uniGrads: "Uni Grads",
    line4: "/img/line-4@1x.png",
    name4: "Muhammad Farhan",
    text5: "Current Google Enginner",
    overlapGroup5: "/img/jeswin-thomas-fixxqdwpj2g-unsplash@1x.png",
    gradient2: "/img/gradient-1@1x.png",
    psleGrads: "PSLE Grads",
    path2: "/img/path-2@1x.png",
    text6: "Passed with flying color",
    name5: "Andy Zhang",
    text7: "New Classes Every Week",
    overlapGroup6: "/img/path-3-1@1x.png",
    x99Classes: "99+ Classes",
    text8: "From the past year student",
    overlapGroup1: "/img/path-3-1@1x.png",
    x80Subject: "80+ Subject",
    text9: "From PSLE to University",
    overlapGroup22: "/img/path-3-1@1x.png",
    x20Lessons: "20+ Lessons",
    averagePerClass: "Average Per Class",
    overlapGroup32: "/img/path-3-1@1x.png",
    address: "30 Mins",
    averagePerLesson: "Average Per Lesson",
    guessWhatYouLike: "Guess what you like",
    thumbnail: "/img/house-thumbnail-2@1x.png",
    courseTitle: <>Intro To secondary 2<br />Mathmatics</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Ang Kah Shin<br />Ang Mo Kio Sec</>,
    students: "350 Students",
    time: "7h 15m",
    rating: "4.7 Rating",
    thumbnail2: "/img/house-thumbnail-3@1x.png",
    courseTitle2: "Intro To H2 Mathmatics",
    likeButton2: "/img/heart-1@1x.png",
    lecture2: <>Devyn Chew<br />Hwa Chong Institute</>,
    students2: "702 Students",
    time2: "10h 25m",
    rating2: "4.9 Rating",
    button: "Sign Up Now",
    loginProps: loginData,
    listingBlockProps: listingBlockData,
    listingBlock2Props: listingBlock2Data,
    listingBlock3Props: listingBlock3Data,
    listingBlock4Props: listingBlock4Data,
    footerProps: footerData,
};

const login2Data = {
    children: "LOGIN",
    className: "login-button",
};

const group9831Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group98312Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group9835Data = {
    group9831Props: group9831Data,
    group98312Props: group98312Data,
};

const group98313Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group98314Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98352Data = {
    className: "button-5",
    group9831Props: group98313Data,
    group98312Props: group98314Data,
};

const group98315Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group98316Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98353Data = {
    className: "button-6",
    group9831Props: group98315Data,
    group98312Props: group98316Data,
};

const group98317Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group98318Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98354Data = {
    className: "button-7",
    group9831Props: group98317Data,
    group98312Props: group98318Data,
};

const group98319Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983110Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98355Data = {
    className: "group-9835",
    group9831Props: group98319Data,
    group98312Props: group983110Data,
};

const searchBarData = {
    searchBox: "/img/rectangle-131@1x.png",
    inputType: "text",
    inputPlaceholder: "Search Course",
    path2920: "/img/path-2920@1x.png",
    path2921: "/img/path-2921@1x.png",
    level: "Level",
    any: "Any",
    subject: "Subject",
    any2: "Any",
    duration: "Duration",
    any3: "Any",
    uploadingTime: "Uploading time",
    any4: "Any",
    moreFilter: "/img/rectangle-133@1x.png",
    moreFilter2: "More Filter",
    group9835Props: group9835Data,
    group98352Props: group98352Data,
    group98353Props: group98353Data,
    group98354Props: group98354Data,
    group98355Props: group98355Data,
};

const headerData = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    loginProps: login2Data,
    group98354Props: searchBarData,
};

const login3Data = {
    children: "LOGIN",
    className: "login-button",
};

const group983111Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983112Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98356Data = {
    group9831Props: group983111Data,
    group98312Props: group983112Data,
};

const group983113Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983114Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98357Data = {
    className: "button-5",
    group9831Props: group983113Data,
    group98312Props: group983114Data,
};

const group983115Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983116Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98358Data = {
    className: "button-6",
    group9831Props: group983115Data,
    group98312Props: group983116Data,
};

const group983117Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983118Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group98359Data = {
    className: "button-7",
    group9831Props: group983117Data,
    group98312Props: group983118Data,
};

const group983119Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983120Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-1",
};

const group983510Data = {
    className: "group-9835",
    group9831Props: group983119Data,
    group98312Props: group983120Data,
};

const searchBar2Data = {
    searchBox: "/img/rectangle-131@1x.png",
    inputType: "text",
    inputPlaceholder: "Search Course",
    path2920: "/img/path-2920@1x.png",
    path2921: "/img/path-2921@1x.png",
    level: "Level",
    any: "Any",
    subject: "Subject",
    any2: "Any",
    duration: "Duration",
    any3: "Any",
    uploadingTime: "Uploading time",
    any4: "Any",
    moreFilter: "/img/rectangle-133@1x.png",
    moreFilter2: "More Filter",
    group9835Props: group98356Data,
    group98352Props: group98357Data,
    group98353Props: group98358Data,
    group98354Props: group98359Data,
    group98355Props: group983510Data,
};

const listingBlock5Data = {
    thumbnail: "/img/house-thumbnail@1x.png",
    courseTitle: <>Full stack Web Development<br />with React and PHP</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>John Harper<br />Singapore Polytechnic</>,
    students: "567 Students",
    time: "32h 25m",
    rating: "4.8 Rating",
};

const listingBlock6Data = {
    thumbnail: "/img/house-thumbnail-1@1x.png",
    courseTitle: <>2021 Complete Python <br />Bootcamp Zero to Hero</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Krilly Zanteck<br />NUS Current Student</>,
    students: "985 Students",
    time: "20h 45m",
    rating: "4.9 Rating",
    className: "listing-block-4",
};

const listingBlock7Data = {
    thumbnail: "/img/house-thumbnail-4@1x.png",
    courseTitle: <>Data Visualization for <br />Statistical Analysis</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Shi Tingxiao<br />Singapore Polytechnic</>,
    students: "251 Students",
    time: "5h 40m",
    rating: "4.8 Rating",
    className: "listing-block-4",
};

const listingBlock8Data = {
    thumbnail: "/img/house-thumbnail-5@1x.png",
    courseTitle: <>Mathmatics for <br />Artificial Intellegence</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Cody Tan<br />Ngee Ann Polytechnic</>,
    students: "340 Students",
    time: "3h 30m",
    rating: "4.9 Rating",
    className: "listing-block-5",
};

const listingBlock9Data = {
    thumbnail: "/img/house-thumbnail-6@1x.png",
    courseTitle: <>Front End Web Development<br />with HTML, CSS, and JS</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Alan Liaw<br />Singapore Polytechnic</>,
    students: "535 Students",
    time: "32h 25m",
    rating: "4.5 Rating",
};

const listingBlock10Data = {
    thumbnail: "/img/house-thumbnail-7@1x.png",
    courseTitle: <>Video Editing and live<br />Sound Design</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Andrea Tan<br />Republic Polytechnic</>,
    students: "124 Students",
    time: "32h 25m",
    rating: "4.9 Rating",
    className: "listing-block-4",
};

const listingBlock11Data = {
    thumbnail: "/img/thumbnail-8@1x.png",
    courseTitle: <>JavaScript Essentials: <br />From Nothing to Ninja</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Kalob Taulien<br />NYU Current Studnet</>,
    students: "657 Students",
    time: "32h 25m",
    rating: "4.6 Rating",
    className: "listing-block-5",
};

const group97402Data = {
    src: "/img/logo-fb@1x.png",
};

const group97412Data = {
    src: "/img/logo-twitter@1x.png",
};

const group97422Data = {
    src: "/img/file-@1x.png",
};

const group97432Data = {
    src: "/img/file-@1x.png",
};

const footer2Data = {
    main_Background: "/img/path-2954@1x.png",
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
    moreFromUs: "More from us",
    text10: <>About<br />Partners<br />Contact</>,
    help: "Help?",
    text11: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
    learned: "Learned",
    divider: "/img/path-6406@1x.png",
    paragraph: "Find your next home within seconds",
    className: "footer-1",
    group9740Props: group97402Data,
    group9741Props: group97412Data,
    group9742Props: group97422Data,
    group9743Props: group97432Data,
};

const coursesData = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    thumbnail: "/img/house-thumbnail-2@1x.png",
    courseTitle: <>Intro To secondary 2<br />Mathmatics</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Ang Kah Shin<br />Ang Mo Kio Sec</>,
    students: "350 Students",
    time: "7h 15m",
    rating: "4.7 Rating",
    thumbnail2: "/img/house-thumbnail-3@1x.png",
    courseTitle2: "Intro To H2 Mathmatics",
    likeButton2: "/img/heart-1@1x.png",
    lecture2: <>Devyn Chew<br />Hwa Chong Institute</>,
    students2: "702 Students",
    time2: "10h 25m",
    rating2: "4.9 Rating",
    headerProps: headerData,
    loginProps: login3Data,
    searchBarProps: searchBar2Data,
    listingBlockProps: listingBlock5Data,
    listingBlock2Props: listingBlock6Data,
    listingBlock3Props: listingBlock7Data,
    listingBlock4Props: listingBlock8Data,
    listingBlock5Props: listingBlock9Data,
    listingBlock6Props: listingBlock10Data,
    listingBlock7Props: listingBlock11Data,
    footerProps: footer2Data,
};

const login4Data = {
    children: "LOGIN",
    className: "login-button-2",
};

const group983121Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983122Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-3",
};

const group983511Data = {
    group9831Props: group983121Data,
    group98312Props: group983122Data,
};

const group983123Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983124Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-3",
};

const group983512Data = {
    className: "button-9",
    group9831Props: group983123Data,
    group98312Props: group983124Data,
};

const group983125Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983126Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-3",
};

const group983513Data = {
    className: "button-10",
    group9831Props: group983125Data,
    group98312Props: group983126Data,
};

const group983127Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983128Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-3",
};

const group983514Data = {
    className: "button-11",
    group9831Props: group983127Data,
    group98312Props: group983128Data,
};

const group983129Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
};

const group983130Data = {
    line3: "/img/line-3-1@1x.png",
    line4: "/img/line-4-1@1x.png",
    className: "group-9831-3",
};

const group983515Data = {
    className: "group-9835-1",
    group9831Props: group983129Data,
    group98312Props: group983130Data,
};

const searchBar3Data = {
    searchBox: "/img/rectangle-131@1x.png",
    inputType: "text",
    inputPlaceholder: "Search Course",
    path2920: "/img/path-2920@1x.png",
    path2921: "/img/path-2921@1x.png",
    level: "Level",
    any: "Any",
    subject: "Subject",
    any2: "Any",
    duration: "Duration",
    any3: "Any",
    uploadingTime: "Uploading time",
    any4: "Any",
    moreFilter: "/img/rectangle-133@1x.png",
    moreFilter2: "More Filter",
    group9835Props: group983511Data,
    group98352Props: group983512Data,
    group98353Props: group983513Data,
    group98354Props: group983514Data,
    group98355Props: group983515Data,
};

const listingBlock12Data = {
    thumbnail: "/img/house-thumbnail@1x.png",
    courseTitle: <>Full stack Web Development<br />with React and PHP</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>John Harper<br />Singapore Polytechnic</>,
    students: "567 Students",
    time: "32h 25m",
    rating: "4.8 Rating",
};

const listingBlock13Data = {
    thumbnail: "/img/house-thumbnail-1@1x.png",
    courseTitle: <>2021 Complete Python <br />Bootcamp Zero to Hero</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Krilly Zanteck<br />NUS Current Student</>,
    students: "985 Students",
    time: "20h 45m",
    rating: "4.9 Rating",
    className: "listing-block-7",
};

const listingBlock14Data = {
    thumbnail: "/img/house-thumbnail-4@1x.png",
    courseTitle: <>Data Visualization for <br />Statistical Analysis</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Shi Tingxiao<br />Singapore Polytechnic</>,
    students: "251 Students",
    time: "5h 40m",
    rating: "4.8 Rating",
    className: "listing-block-7",
};

const listingBlock15Data = {
    thumbnail: "/img/house-thumbnail-5@1x.png",
    courseTitle: <>Mathmatics for <br />Artificial Intellegence</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Cody Tan<br />Ngee Ann Polytechnic</>,
    students: "340 Students",
    time: "3h 30m",
    rating: "4.9 Rating",
    className: "listing-block-8",
};

const listingBlock16Data = {
    thumbnail: "/img/house-thumbnail-6@1x.png",
    courseTitle: <>Front End Web Development<br />with HTML, CSS, and JS</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Alan Liaw<br />Singapore Polytechnic</>,
    students: "535 Students",
    time: "32h 25m",
    rating: "4.5 Rating",
};

const listingBlock17Data = {
    thumbnail: "/img/house-thumbnail-7@1x.png",
    courseTitle: <>Video Editing and live<br />Sound Design</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Andrea Tan<br />Republic Polytechnic</>,
    students: "124 Students",
    time: "32h 25m",
    rating: "4.9 Rating",
    className: "listing-block-7",
};

const listingBlock18Data = {
    thumbnail: "/img/thumbnail-8@1x.png",
    courseTitle: <>JavaScript Essentials: <br />From Nothing to Ninja</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Kalob Taulien<br />NYU Current Studnet</>,
    students: "657 Students",
    time: "32h 25m",
    rating: "4.6 Rating",
    className: "listing-block-8",
};

const group97403Data = {
    src: "/img/logo-fb@1x.png",
};

const group97413Data = {
    src: "/img/logo-twitter@1x.png",
};

const group97423Data = {
    src: "/img/file-@1x.png",
};

const group97433Data = {
    src: "/img/file-@1x.png",
};

const footer3Data = {
    main_Background: "/img/path-2954@1x.png",
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
    moreFromUs: "More from us",
    text10: <>About<br />Partners<br />Contact</>,
    help: "Help?",
    text11: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
    learned: "Learned",
    divider: "/img/path-6406@1x.png",
    paragraph: "Find your next home within seconds",
    className: "footer-2",
    group9740Props: group97403Data,
    group9741Props: group97413Data,
    group9742Props: group97423Data,
    group9743Props: group97433Data,
};

const home1Data = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    thumbnail: "/img/house-thumbnail-2@1x.png",
    courseTitle: <>Intro To secondary 2<br />Mathmatics</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Ang Kah Shin<br />Ang Mo Kio Sec</>,
    students: "350 Students",
    time: "7h 15m",
    rating: "4.7 Rating",
    thumbnail2: "/img/house-thumbnail-3@1x.png",
    courseTitle2: "Intro To H2 Mathmatics",
    likeButton2: "/img/heart-1@1x.png",
    lecture2: <>Devyn Chew<br />Hwa Chong Institute</>,
    students2: "702 Students",
    time2: "10h 25m",
    rating2: "4.9 Rating",
    loginProps: login4Data,
    searchBarProps: searchBar3Data,
    listingBlockProps: listingBlock12Data,
    listingBlock2Props: listingBlock13Data,
    listingBlock3Props: listingBlock14Data,
    listingBlock4Props: listingBlock15Data,
    listingBlock5Props: listingBlock16Data,
    listingBlock6Props: listingBlock17Data,
    listingBlock7Props: listingBlock18Data,
    footerProps: footer3Data,
};

