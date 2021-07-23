import React from 'react'
import Navbar from "../navbar/Navbar"
import Courses from "../coursecard/courses.json"
import CT from "../coursecard/CT.json"
import Coursecard from '../coursecard/Coursecard'
import CTcard from '../coursecard/CTcard'
import './Resources.css'

function Resources() {
    let allCourses = Courses.courses
    let allCT = CT.courses
    return (
        <div>
            <Navbar />
            <section className="p-2 container">
                <h1 className="text-center text-dark didac-font">Languages</h1>
                <div className="row">
                    {
                        allCourses.map(item => <Coursecard data={item}/>)
                    }
                    </div>
                    <br></br>
                <h1 className="text-center text-dark didac-font">Computational Thinking Courses</h1><br></br>
                <h6 className="text-left railway-font my-2">
                Computational thinking is the process of approaching a problem in a systematic manner and creating
                and expressing a solution such that it can be carried out by a computer.
                Many quantitative and data-centric problems can be solved using computational thinking and
                an understanding of computational thinking will give you a foundation for solving problems that have real-world,
                social impact.  
                </h6>
                <div className="row mt-3">
                    {
                        allCT.map(item => <CTcard data={item}/>)
                    }
                    </div>
            </section>
        </div>
    )
}

export default Resources
