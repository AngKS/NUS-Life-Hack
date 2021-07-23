import React from 'react'
import Navbar from '../navbar/Navbar'
import Firstcard from '../getstartedcard/Firstcard'
import Course from '../courseCard/Course'

function GetStarted() {

    return (
        <div>
            <Navbar />
            <Firstcard />
            {/* <Course /> */}
        </div>
    )
}

export default GetStarted
