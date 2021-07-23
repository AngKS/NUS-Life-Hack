import {React, useEffect, useState} from 'react'
import axios from 'axios'




function Courses() {

    const [courses, setCourses] = useState()

    useEffect(() => {
        axios.get("https://nus-life-hack.herokuapp.com/courses").then(res => {
            const allCourses = res.data
            setCourses(allCourses)
        })
    }, [])

    return (
        <div>
            {
                (courses)? (
                    <div>
                        {
                            courses.map(course => {
                                return (
                                    <CourseCard course={course} />
                                )
                            })
                        }
                    </div>
                ) : <div className="text-center"><h1>Loading...</h1><div className="spinner-border"></div></div>
            }
        </div>
    )
}

export default Courses
