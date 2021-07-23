import React from 'react'
import "./coursecard.css"

function CourseCard({ course }) {
    return (
        <div className="card-container col-md-3">
            <div className="card-body">
                <h3 className="card-title">{course.courseName}</h3>
                <div className="card-text">
                    <section className="row d-inline">
                        <h6 className="float-left">{course.studentCount} Students</h6>
                        <h6 className="float-right">{course.duration}</h6>
                    </section>
                </div>
                    <hr />
                    <section className="row d-inline card-subtitle">
                        <h6 className="float-left">by {course.tutor}</h6>
                        <h6 className="float-right">{course.rating}</h6>
                    </section>
                
            </div>

        </div>
    )
}

export default CourseCard
