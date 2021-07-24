import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Community from "./components/Community";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Courses3 from "./components/Courses3";
import Courses1 from "./components/Courses1";
import Home1 from "./components/Home1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/community">
          <Community {...communityData} />
        </Route>
        <Route path="/home">
          <Home {...homeData} />
        </Route>
        <Route path="/courses">
          <Courses {...coursesData} />
        </Route>
        <Route path="/courses-3">
          <Courses3 {...courses3Data} />
        </Route>
        <Route path="/courses-1">
          <Courses1 {...courses1Data} />
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

const buttonData = {
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    loginProps: loginData,
};

const headerData = {
    logo: "Learned",
    buttonProps: buttonData,
};

const login2Data = {
    children: "LOGIN",
};

const q2Data = {
    question: "How do I undo the most recent local commits in Git?",
    breifDescription: <>I accidentally committed the wrong files to Git, but didn&#x27;t push the commit to the server yet. How can I undo those commits from the <br />local repository? The only way seems to be to copy the edits in ...</>,
    askedAt27072021: "Asked at 27/07/2021",
    byAngKahShin: "By Ang Kah Shin",
};

const userInfoData = {
    askedAt23072021: "Asked at 23/07/2021",
    byChangYongFu: "By Chang Yong Fu",
};

const userInfo2Data = {
    askedAt23072021: "Asked at 22/07/2021",
    byChangYongFu: "By Tan Kah Shin",
    className: "user-info-4",
};

const q22Data = {
    question: "How do I rename a local Git branch?",
    breifDescription: <>I don&#x27;t want to rename a remote branch, as described in Rename master branch for both local and remote Git repositories. <br />How can I rename a local branch which hasn&#x27;t been pushed to a remote branch? ...</>,
    askedAt27072021: "Asked at 21/07/2021",
    byAngKahShin: "Xenon Shi",
    className: "community-item",
};

const copyrightData = {
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
};

const moreAboutUsColData = {
    moreFromUs: "More from us",
    text1: <>About<br />Partners<br />Contact</>,
};

const helpColData = {
    help: "Help?",
    text2: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
};

const addressColData = {
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
};

const group9740Data = {
    src: "/img/logo-fb@1x.png",
};

const group9741Data = {
    src: "/img/logo-twitter@1x.png",
};

const group9743Data = {
    src: "/img/file-@1x.png",
};

const footerData = {
    main_Background: "/img/path-2954@1x.png",
    logoIg: "/img/file-@1x.png",
    learned: "Learned",
    divider: "/img/path-6406@1x.png",
    paragraph: "Find your next home within seconds",
    copyrightProps: copyrightData,
    moreAboutUsColProps: moreAboutUsColData,
    helpColProps: helpColData,
    addressColProps: addressColData,
    group9740Props: group9740Data,
    group9741Props: group9741Data,
    group9743Props: group9743Data,
};

const communityData = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    rectangle143: "/img/rectangle-143@1x.png",
    path2922: "/img/path-2922@1x.png",
    search: "Search",
    text3: "Type out your question",
    question: "Why is processing a sorted array faster than processing an unsorted array?",
    breifDescription: <>Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data miraculously makes the <br />code almost six times faster: #include &lt;algorithm&gt; #include &amp;...</>,
    askedAt29072021: "Asked at 29/07/2021",
    byShiTingxiao: "By Shi Tingxiao",
    question2: "How do I delete a Git branch locally and remotely?",
    breifDescription2: <>I want to delete a branch both locally and remotely. Failed Attempts to Delete a Remote Branch $ git branch -d remotes/origin/<br />bugfix error: branch &#x27;remotes/origin/bugfix&#x27; not found. $ git branch -d ...</>,
    askedAt24072021: "Asked at 24/07/2021",
    byCodyHan: "By Cody Han",
    question3: "What is the difference between 'git pull' and 'git fetch'?",
    breifDescription3: "What are the differences between git pull and git fetch?",
    question4: "What does the “yield” keyword do?",
    breifDescription4: <>What is the use of the yield keyword in Python? What does it do? For example, I&#x27;m trying to understand this code1: <br />def _get_child_candidates(self, distance, min_dist, max_dist): if self._leftchild ...</>,
    headerProps: headerData,
    loginProps: login2Data,
    q2Props: q2Data,
    userInfoProps: userInfoData,
    userInfo2Props: userInfo2Data,
    q22Props: q22Data,
    footerProps: footerData,
};

const login3Data = {
    children: "LOGIN",
    className: "login-button-3",
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
    className: "listing-block-6",
};

const listingBlock22Data = {
    thumbnail: "/img/house-thumbnail-2@1x.png",
    courseTitle: <>Intro To secondary 2<br />Mathmatics</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Ang Kah Shin<br />Ang Mo Kio Sec</>,
    students: "350 Students",
    time: "7h 15m",
    rating: "4.7 Rating",
};

const listingBlock3Data = {
    thumbnail: "/img/house-thumbnail-3@1x.png",
    courseTitle: "Intro To H2 Mathmatics",
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Devyn Chew<br />Hwa Chong Institute</>,
    students: "702 Students",
    time: "10h 25m",
    rating: "4.9 Rating",
};

const listingBlock4Data = {
    thumbnail: "/img/house-thumbnail-4@1x.png",
    courseTitle: <>Data Visualization for <br />Statistical Analysis</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Shi Tingxiao<br />Singapore Polytechnic</>,
    students: "251 Students",
    time: "5h 40m",
    rating: "4.8 Rating",
    className: "listing-block-7",
};

const listingBlock5Data = {
    thumbnail: "/img/house-thumbnail-5@1x.png",
    courseTitle: <>Mathmatics for <br />Artificial Intellegence</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Cody Tan<br />Ngee Ann Polytechnic</>,
    students: "340 Students",
    time: "3h 30m",
    rating: "4.9 Rating",
    className: "listing-block-8",
};

const copyright2Data = {
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
};

const moreAboutUsCol2Data = {
    moreFromUs: "More from us",
    text1: <>About<br />Partners<br />Contact</>,
};

const helpCol2Data = {
    help: "Help?",
    text2: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
};

const addressCol2Data = {
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
};

const group97402Data = {
    src: "/img/logo-fb@1x.png",
};

const group97412Data = {
    src: "/img/logo-twitter@1x.png",
};

const group9742Data = {
    src: "/img/file-@1x.png",
};

const group97432Data = {
    src: "/img/file-@1x.png",
};

const footer3Data = {
    main_Background: "/img/path-2954@1x.png",
    copyright_Left: "Learned",
    divider: "/img/path-6406@1x.png",
    copyright_Right: "Find your next home within seconds",
    group9740Props: copyright2Data,
    group9743Props: moreAboutUsCol2Data,
    group9743Props2: helpCol2Data,
    group9743Props3: addressCol2Data,
    group9740Props2: group97402Data,
    group9741Props: group97412Data,
    group9742Props: group9742Data,
    group9743Props4: group97432Data,
};

const homeData = {
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    logo: "Learned",
    todayIsTheDay: "Today is the day",
    divider: "/img/path-1@1x.png",
    todayIsTheDay2: "Today is the day",
    text4: "To learn from the best in town",
    inputType: "text",
    inputPlaceholder: "Your email address...",
    freeSignUp: "FREE SIGN UP",
    spanText: <>By sharing your email, you agree to our <br /></>,
    spanText2: "Terms and Conditions",
    spanText3: " and ",
    spanText4: "Privacy Policy",
    overlapGroup1: "/img/van-tay-media-pc-hmxz0e-w-unsplash@1x.png",
    oLevelGrads: "O-level Grads",
    line1: "/img/line-1@1x.png",
    text6: "The Straight A Student",
    name: "Emma Huan",
    overlapGroup2: "/img/jeswin-thomas-h5fholbzt-m-unsplash@1x.png",
    aLevelGrads: "A-Level Grads",
    line2: "/img/line-2@1x.png",
    text7: "Full Scholarship winner",
    name2: "Megan Tan",
    overlapGroup3: "/img/jeswin-thomas-8nhqx4zi9wk-unsplash@1x.png",
    polyGrads: "Poly Grads",
    line3: "/img/line-3@1x.png",
    name3: "Christian Jowe",
    startUpYoungStar: "Start up young star",
    overlapGroup5: "/img/linkedin-sales-solutions-ei50zda-l8y-unsplash@1x.png",
    gradient: "/img/gradient@1x.png",
    uniGrads: "Uni Grads",
    line4: "/img/line-4@1x.png",
    name4: "Muhammad Farhan",
    text8: "Current Google Enginner",
    overlapGroup6: "/img/jeswin-thomas-fixxqdwpj2g-unsplash@1x.png",
    gradient2: "/img/gradient-1@1x.png",
    psleGrads: "PSLE Grads",
    path2: "/img/path-2@1x.png",
    text9: "Passed with flying color",
    name5: "Andy Zhang",
    text10: "New Classes Every Week",
    overlapGroup12: "/img/path-3-1@1x.png",
    x99Classes: "99+ Classes",
    text11: "From the past year student",
    overlapGroup22: "/img/path-3-1@1x.png",
    x80Subject: "80+ Subject",
    text12: "From PSLE to University",
    overlapGroup32: "/img/path-3-1@1x.png",
    x20Lessons: "20+ Lessons",
    averagePerClass: "Average Per Class",
    overlapGroup4: "/img/path-3-1@1x.png",
    address: "30 Mins",
    averagePerLesson: "Average Per Lesson",
    guessWhatYouLike: "Guess what you like",
    button: "Sign Up Now",
    loginProps: login3Data,
    listingBlockProps: listingBlockData,
    listingBlock2Props: listingBlock2Data,
    listingBlock2Props2: listingBlock22Data,
    listingBlock3Props: listingBlock3Data,
    listingBlock3Props2: listingBlock4Data,
    listingBlock4Props: listingBlock5Data,
    footer3Props: footer3Data,
};

const login4Data = {
    children: "LOGIN",
};

const button2Data = {
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    className: "button-3",
    loginProps: login4Data,
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
    className: "button-8",
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
    className: "button-9",
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
    className: "button-10",
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

const header3Data = {
    logo: "Learned",
    loginProps: button2Data,
    group98354Props: searchBarData,
};

const login5Data = {
    children: "LOGIN",
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
    className: "button-8",
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
    className: "button-9",
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
    className: "button-10",
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
    className: "search-bar-1",
    group9835Props: group98356Data,
    group98352Props: group98357Data,
    group98353Props: group98358Data,
    group98354Props: group98359Data,
    group98355Props: group983510Data,
};

const listingBlock6Data = {
    thumbnail: "/img/house-thumbnail@1x.png",
    courseTitle: <>Full stack Web Development<br />with React and PHP</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>John Harper<br />Singapore Polytechnic</>,
    students: "567 Students",
    time: "32h 25m",
    rating: "4.8 Rating",
    className: "listing-block",
};

const listingBlock23Data = {
    thumbnail: "/img/house-thumbnail-2@1x.png",
    courseTitle: <>Intro To secondary 2<br />Mathmatics</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Ang Kah Shin<br />Ang Mo Kio Sec</>,
    students: "350 Students",
    time: "7h 15m",
    rating: "4.7 Rating",
    className: "listing-block-12",
};

const listingBlock32Data = {
    thumbnail: "/img/house-thumbnail-3@1x.png",
    courseTitle: "Intro To H2 Mathmatics",
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Devyn Chew<br />Hwa Chong Institute</>,
    students: "702 Students",
    time: "10h 25m",
    rating: "4.9 Rating",
    className: "listing-block-15",
};

const listingBlock7Data = {
    thumbnail: "/img/house-thumbnail-4@1x.png",
    courseTitle: <>Data Visualization for <br />Statistical Analysis</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Shi Tingxiao<br />Singapore Polytechnic</>,
    students: "251 Students",
    time: "5h 40m",
    rating: "4.8 Rating",
    className: "listing-block-9",
};

const listingBlock8Data = {
    thumbnail: "/img/house-thumbnail-5@1x.png",
    courseTitle: <>Mathmatics for <br />Artificial Intellegence</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Cody Tan<br />Ngee Ann Polytechnic</>,
    students: "340 Students",
    time: "3h 30m",
    rating: "4.9 Rating",
    className: "listing-block-1",
};

const listingBlock9Data = {
    thumbnail: "/img/house-thumbnail-6@1x.png",
    courseTitle: <>Front End Web Development<br />with HTML, CSS, and JS</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Alan Liaw<br />Singapore Polytechnic</>,
    students: "535 Students",
    time: "32h 25m",
    rating: "4.5 Rating",
    className: "listing-block",
};

const listingBlock10Data = {
    thumbnail: "/img/house-thumbnail-7@1x.png",
    courseTitle: <>Video Editing and live<br />Sound Design</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Andrea Tan<br />Republic Polytechnic</>,
    students: "124 Students",
    time: "32h 25m",
    rating: "4.9 Rating",
    className: "listing-block-10",
};

const listingBlock11Data = {
    thumbnail: "/img/thumbnail-8@1x.png",
    courseTitle: <>JavaScript Essentials: <br />From Nothing to Ninja</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Kalob Taulien<br />NYU Current Studnet</>,
    students: "657 Students",
    time: "32h 25m",
    rating: "4.6 Rating",
    className: "listing-block-1",
};

const copyright3Data = {
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
};

const moreAboutUsCol3Data = {
    moreFromUs: "More from us",
    text1: <>About<br />Partners<br />Contact</>,
};

const helpCol3Data = {
    help: "Help?",
    text2: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
};

const addressCol3Data = {
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
};

const group97403Data = {
    src: "/img/logo-fb@1x.png",
};

const group97413Data = {
    src: "/img/logo-twitter@1x.png",
};

const group97422Data = {
    src: "/img/file-@1x.png",
};

const group97433Data = {
    src: "/img/file-@1x.png",
};

const footer32Data = {
    main_Background: "/img/path-2954@1x.png",
    copyright_Left: "Learned",
    divider: "/img/path-6406@1x.png",
    copyright_Right: "Find your next home within seconds",
    className: "footer-4",
    group9740Props: copyright3Data,
    group9743Props: moreAboutUsCol3Data,
    group9743Props2: helpCol3Data,
    group9743Props3: addressCol3Data,
    group9740Props2: group97403Data,
    group9741Props: group97413Data,
    group9742Props: group97422Data,
    group9743Props4: group97433Data,
};

const coursesData = {
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    logo: "Learned",
    thumbnail: "/img/house-thumbnail-1@1x.png",
    courseTitle: <>2021 Complete Python <br />Bootcamp Zero to Hero</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Krilly Zanteck<br />NUS Current Student</>,
    students: "985 Students",
    time: "20h 45m",
    rating: "4.9 Rating",
    x14395B: "#14395B",
    header3Props: header3Data,
    loginProps: login5Data,
    searchBarProps: searchBar2Data,
    listingBlockProps: listingBlock6Data,
    listingBlock2Props: listingBlock23Data,
    listingBlock3Props: listingBlock32Data,
    listingBlock2Props2: listingBlock7Data,
    listingBlock3Props2: listingBlock8Data,
    listingBlock4Props: listingBlock9Data,
    listingBlock5Props: listingBlock10Data,
    listingBlock6Props: listingBlock11Data,
    footer3Props: footer32Data,
};

const login6Data = {
    children: "LOGIN",
};

const copyright4Data = {
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
};

const moreAboutUsCol4Data = {
    moreFromUs: "More from us",
    text1: <>About<br />Partners<br />Contact</>,
};

const helpCol4Data = {
    help: "Help?",
    text2: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
};

const addressCol4Data = {
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
};

const group97404Data = {
    src: "/img/logo-fb@1x.png",
};

const group97414Data = {
    src: "/img/logo-twitter@1x.png",
};

const group97434Data = {
    src: "/img/file-@1x.png",
};

const footer2Data = {
    main_Background: "/img/path-2954@1x.png",
    logoIg: "/img/file-@1x.png",
    learned: "Learned",
    divider: "/img/path-6406@1x.png",
    paragraph: "Find your next home within seconds",
    className: "footer-1",
    copyrightProps: copyright4Data,
    moreAboutUsColProps: moreAboutUsCol4Data,
    helpColProps: helpCol4Data,
    addressColProps: addressCol4Data,
    group9740Props: group97404Data,
    group9741Props: group97414Data,
    group9743Props: group97434Data,
};

const courses3Data = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    text19: "Check out our awesome plans!",
    overlapGroup2: "/img/backtround-1@1x.png",
    starter: "Starter",
    description: <>- Access all video lectures <br />for your select grade</>,
    x399Mo: "$3.99/Mo",
    iMReady: "I'm ready",
    overlapGroup3: "/img/backtround-1@1x.png",
    theStudyOne: "The Study One",
    description2: <>- Access all video lectures <br />on the platform<br /> - Raise questions to <br />lecturers</>,
    x699Mo: "$6.99/Mo",
    letSGo: "Let's go",
    overlapGroup4: "/img/backtround-1@1x.png",
    theMonster: "The Monster",
    description3: <>- Access all video lectures <br />on the platform<br />- Get personal contact<br /> with the lecturers</>,
    x999Mo: "$9.99/Mo",
    hitMe: "Hit me",
    spanText: "Details about ",
    spanText2: "schools",
    spanText3: " that's working with us",
    loginProps: login6Data,
    footerProps: footer2Data,
};

const login7Data = {
    children: "LOGIN",
};

const button3Data = {
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    loginProps: login7Data,
};

const header2Data = {
    logo: "Learned",
    buttonProps: button3Data,
};

const login8Data = {
    children: "LOGIN",
};

const button4Data = {
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    loginProps: login8Data,
};

const header4Data = {
    logo: "Learned",
    buttonProps: button4Data,
};

const copyright5Data = {
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
};

const moreAboutUsCol5Data = {
    moreFromUs: "More from us",
    text1: <>About<br />Partners<br />Contact</>,
};

const helpCol5Data = {
    help: "Help?",
    text2: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
};

const addressCol5Data = {
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
};

const group97405Data = {
    src: "/img/logo-fb@1x.png",
};

const group97415Data = {
    src: "/img/logo-twitter@1x.png",
};

const group97435Data = {
    src: "/img/file-@1x.png",
};

const footer4Data = {
    main_Background: "/img/path-2954@1x.png",
    logoIg: "/img/file-@1x.png",
    learned: "Learned",
    divider: "/img/path-6406@1x.png",
    paragraph: "Find your next home within seconds",
    className: "footer-2",
    copyrightProps: copyright5Data,
    moreAboutUsColProps: moreAboutUsCol5Data,
    helpColProps: helpCol5Data,
    addressColProps: addressCol5Data,
    group9740Props: group97405Data,
    group9741Props: group97415Data,
    group9743Props: group97435Data,
};

const courses1Data = {
    video: "/img/video@1x.png",
    details: "/img/rectangle-138@1x.png",
    title: "Title",
    loremIpsumDolorS: <>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br />consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</>,
    thumbnail: "/img/thumbnail@1x.png",
    lessonTitle: <>Title............<br />.............</>,
    presenter: "Presenter",
    thumbnail2: "/img/thumbnail-1@1x.png",
    lessonTitle2: <>Title............<br />.............</>,
    presenter2: "Presenter",
    thumbnail3: "/img/thumbnail-2@1x.png",
    lessonTitle3: <>Title............<br />.............</>,
    presenter3: "Presenter",
    thumbnail4: "/img/thumbnail-3@1x.png",
    lessonTitle4: <>Title............<br />.............</>,
    presenter4: "Presenter",
    headerProps: header2Data,
    headerProps2: header4Data,
    copyrightProps: footer4Data,
};

const login9Data = {
    children: "LOGIN",
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
    className: "button-12",
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
    className: "button-13",
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
    className: "button-14",
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
    className: "listing-block-2",
};

const listingBlock13Data = {
    thumbnail: "/img/house-thumbnail-1@1x.png",
    courseTitle: <>2021 Complete Python <br />Bootcamp Zero to Hero</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Krilly Zanteck<br />NUS Current Student</>,
    students: "985 Students",
    time: "20h 45m",
    rating: "4.9 Rating",
    className: "listing-block-4",
};

const listingBlock24Data = {
    thumbnail: "/img/house-thumbnail-2@1x.png",
    courseTitle: <>Intro To secondary 2<br />Mathmatics</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Ang Kah Shin<br />Ang Mo Kio Sec</>,
    students: "350 Students",
    time: "7h 15m",
    rating: "4.7 Rating",
    className: "listing-block-13",
};

const listingBlock33Data = {
    thumbnail: "/img/house-thumbnail-3@1x.png",
    courseTitle: "Intro To H2 Mathmatics",
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Devyn Chew<br />Hwa Chong Institute</>,
    students: "702 Students",
    time: "10h 25m",
    rating: "4.9 Rating",
    className: "listing-block-16",
};

const listingBlock14Data = {
    thumbnail: "/img/house-thumbnail-4@1x.png",
    courseTitle: <>Data Visualization for <br />Statistical Analysis</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Shi Tingxiao<br />Singapore Polytechnic</>,
    students: "251 Students",
    time: "5h 40m",
    rating: "4.8 Rating",
    className: "listing-block-4",
};

const listingBlock15Data = {
    thumbnail: "/img/house-thumbnail-5@1x.png",
    courseTitle: <>Mathmatics for <br />Artificial Intellegence</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Cody Tan<br />Ngee Ann Polytechnic</>,
    students: "340 Students",
    time: "3h 30m",
    rating: "4.9 Rating",
    className: "listing-block-3",
};

const listingBlock16Data = {
    thumbnail: "/img/house-thumbnail-6@1x.png",
    courseTitle: <>Front End Web Development<br />with HTML, CSS, and JS</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Alan Liaw<br />Singapore Polytechnic</>,
    students: "535 Students",
    time: "32h 25m",
    rating: "4.5 Rating",
    className: "listing-block-2",
};

const listingBlock17Data = {
    thumbnail: "/img/house-thumbnail-7@1x.png",
    courseTitle: <>Video Editing and live<br />Sound Design</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Andrea Tan<br />Republic Polytechnic</>,
    students: "124 Students",
    time: "32h 25m",
    rating: "4.9 Rating",
    className: "listing-block-4",
};

const listingBlock18Data = {
    thumbnail: "/img/thumbnail-8@1x.png",
    courseTitle: <>JavaScript Essentials: <br />From Nothing to Ninja</>,
    likeButton: "/img/heart-1@1x.png",
    lecture: <>Kalob Taulien<br />NYU Current Studnet</>,
    students: "657 Students",
    time: "32h 25m",
    rating: "4.6 Rating",
    className: "listing-block-3",
};

const copyright6Data = {
    copyright_Left: "© Copyright 2021, Learned.com",
    copyright_Right: "Terms & Condition    |   Privacy Policy",
};

const moreAboutUsCol6Data = {
    moreFromUs: "More from us",
    text1: <>About<br />Partners<br />Contact</>,
};

const helpCol6Data = {
    help: "Help?",
    text2: <>FAQ<br />Term &amp; Conditi0on<br />Policy<br />Privacy</>,
};

const addressCol6Data = {
    address: "Address",
    address2: <>500 Dover Rd, Singapore 139651<br />Singapore Polytechnic</>,
};

const group97406Data = {
    src: "/img/logo-fb@1x.png",
};

const group97416Data = {
    src: "/img/logo-twitter@1x.png",
};

const group97423Data = {
    src: "/img/file-@1x.png",
};

const group97436Data = {
    src: "/img/file-@1x.png",
};

const footer33Data = {
    main_Background: "/img/path-2954@1x.png",
    copyright_Left: "Learned",
    divider: "/img/path-6406@1x.png",
    copyright_Right: "Find your next home within seconds",
    className: "footer-5",
    group9740Props: copyright6Data,
    group9743Props: moreAboutUsCol6Data,
    group9743Props2: helpCol6Data,
    group9743Props3: addressCol6Data,
    group9740Props2: group97406Data,
    group9741Props: group97416Data,
    group9742Props: group97423Data,
    group9743Props4: group97436Data,
};

const home1Data = {
    logo: "Learned",
    place: "Home",
    courses: "Courses",
    community: "Community",
    pricing: "Pricing",
    loginProps: login9Data,
    searchBarProps: searchBar3Data,
    listingBlockProps: listingBlock12Data,
    listingBlock2Props: listingBlock13Data,
    listingBlock2Props2: listingBlock24Data,
    listingBlock3Props: listingBlock33Data,
    listingBlock3Props2: listingBlock14Data,
    listingBlock4Props: listingBlock15Data,
    listingBlock5Props: listingBlock16Data,
    listingBlock6Props: listingBlock17Data,
    listingBlock7Props: listingBlock18Data,
    footer3Props: footer33Data,
};

