import React from 'react'
import "./coursecard.css"

function CourseCard({ course }) {
    return (
        <div className="listing-block">

            <div className="row thumbnail">
                <img src={} alt="" />
            </div>
            <div className="row course-title">
                <p>{course}</p>
            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
    )
}

export default CourseCard
