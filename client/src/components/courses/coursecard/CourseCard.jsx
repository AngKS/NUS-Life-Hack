import React from 'react'
// import "./coursecard.css"

function CourseCard({ course }) {
    return (
        <div className="listing-block">

            <div className="row thumbnail">
                <img src="" alt="" />
            </div>
            <div className="row course-title">
                <p>{course.courseName}</p>
            </div>
            <div className="row">
                <div className="students">
                    {course.studentCount} Students
                </div>
                <div className="time">
                    {course.duration}
                </div>
            </div>
            <div className="row lecture">

                {course.tutor}
                <div className="rating">
                    {course.rating}
                </div>

            </div>
        </div>
    )
}

export default CourseCard
