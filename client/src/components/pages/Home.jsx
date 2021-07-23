import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="site" >
            <Navbar />
            <div className="container-fluid text-center home_content">

                {/* GEEKIES title */}
                <div>
                    <div className="row align-items-center ">
                        <div className="col-md"><h1 className="title">Geekies</h1></div>
                    </div>

                    {/* Button */}
                    <div className="row align-items-center">
                        <div className="col-md">
                            <Link to="/getStarted"><button className="btn btn-lg button_home Right_btn">&emsp;Get Started&emsp;</button></Link>
                        </div>
                    </div>

                    {/* Subtititle */}
                    <div className="row align-items center">
                        <div className="col-md"><h5 className="subtitle">click to find out more</h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
