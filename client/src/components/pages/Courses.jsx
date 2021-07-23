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
                        <iframe className="w-100 h-100" src="https://youtu.be/w7ejDZ8SWv8" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-4">
                        <CourseList />
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </section>

        </div>
    )
}

export default Courses
