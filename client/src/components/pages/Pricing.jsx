import React from 'react'
import Navbar from '../navbar/Navbar'

import "./pricing.css"

function Pricing() {
    return (
        <div>
            <Navbar />
            
            <div className="flex-row">
                <div className="starter">
                    <div className="overlap-group">
                        <h1 className="titlerigsans-bold-cello-56px">Starter</h1>
                        <div className="descriptionrigsans-regular-normal-cello-30px">
                            - Access all video lectures <br />
                            for your select grade
                        </div>
                        <div className="x399-morigsans-semi-bold-dodger-blue-49px">$3.99/Mo</div>
                        <div className="join-button">
                            <div className="im-readyrigsans-semi-bold-white-30px">I&#39;m ready</div>
                        </div>
                    </div>
                </div>
                <div className="the">
                    <div className="overlap-group1">
                        <div className="the-study-one">The Study One</div>
                        <div className="description-1rigsans-regular-normal-cello-30px">
                            - Access all video lectures <br />
                            on the platform
                            <br /> - Raise questions to <br />
                            lecturers
                        </div>
                        <div className="x699-morigsans-semi-bold-dodger-blue-49px">$6.99/Mo</div>
                        <div className="join-button-1">
                            <div className="lets-gorigsans-semi-bold-white-30px">Let&#39;s go</div>
                        </div>
                    </div>
                </div>
                <div className="the">
                    <div className="overlap-group2">
                        <div className="the-monsterrigsans-bold-cello-56px">The Monster</div>
                        <div className="description-2rigsans-regular-normal-cello-30px">
                            - Access all video lectures <br />
                            on the platform
                            <br />- Get personal contact
                            <br /> with the lecturers
                        </div>
                        <div className="x999-morigsans-semi-bold-dodger-blue-49px">$9.99/Mo</div>
                        <div className="join-button-2">
                            <div className="hit-merigsans-semi-bold-white-30px">Hit me</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-1">
                <span className="rigsans-medium-cello-20px">Details about </span>
                <span className="span1">schools</span>
                <span className="rigsans-medium-cello-20px"> that&#39;s working with us</span>
            </div>

        </div>
    )
}

export default Pricing
