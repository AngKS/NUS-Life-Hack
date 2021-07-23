import {React, useEffect, useState} from 'react'
import axios from 'axios'
import CourseCard from './coursecard/CourseCard'




function CourseList() {

    const [courses, setCourses] = useState()

    useEffect(() => {
        axios.get("https://nus-life-hack.herokuapp.com/courses").then(res => {
            const allCourses = res.data
            setCourses(allCourses)
        })
    }, [])

    return (
        <div className="container">
            {
                (courses)? (
                    <div>
                        {
                            courses.map(course => {
                                return (
                                    <div className="row d-flex">
                                        <CourseCard course={course} />
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : <div className="text-center"><h1>Loading...</h1><div className="spinner-border"></div></div>
            }
        </div>
    )
}

export default CourseList
