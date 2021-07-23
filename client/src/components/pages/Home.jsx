import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Banner from "../homeBanner/Banner";
import CoursesList from "../courses/CourseList";
// import "./Home.css";

function Home() {
  return (
    <div className="site">
      <Navbar />
      <section className="container">
        <div className="row mt-5">
          <div className="col-md-4 text-center">
            <div className="jumbotron">
              <h1 className="border-bottom py-3 mb-0">Today is the Day</h1>
              <h5 className="border-top mt-0">To learn from the best in town</h5>
              <div className=" mx-auto">
                <input className="form-control my-4" type="email" name="" placeholder="Your Email address..." id="" />
                <button className="btn btn-info m-2">Free Sign Up</button>
              </div>
            </div>

            
          </div>
          <div className="col-md-7">
            <h1>Images</h1>
            {/* <Banner /> */}
          </div>
        </div>
        <hr />
        <div className="text-center my-4 mx-auto">
          <h1 className="col-md-12">New Classes Every Week</h1>
          <div className="container-fluid p-0">
            <div className="row m-3">
              <div className="col alert alert-primary mx-2">
                <h4>99+ Classes</h4>
                <p>From the past students</p>
              </div>
              <div className="col alert alert-primary mx-2">
                <h4>80+ Subjects</h4>
                <p>From PSLE to University</p>
              </div>
              <div className="col alert alert-primary mx-2">
                <h4>20+ Lessons</h4>
                <p>Average per class</p>
              </div>
              <div className="col alert alert-primary mx-2">
                <h4>30 Min</h4>
                <p>Average per lesson</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h1>Guess what you like</h1>

        <CoursesList />
        

      </section>
    </div>
  );
}

export default Home;
