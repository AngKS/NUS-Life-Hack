import {React, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import CourseList from '../courses/CourseList'
import Navbar from '../navbar/Navbar'

function Courses() {
    return (
        <div>
            <Navbar />
            <section className="container">
                <div className="row">
                    <div className="col-md-7">
                        Hello
                    </div>
                    <div className="col-md-4">
                        <CourseList />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Courses
