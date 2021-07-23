import React from 'react'
import ListingBlock from '../ListingBlock/ListingBlock'
import Navbar from '../navbar/Navbar'

function Course(){
    return(
        <div className="">
            <Navbar />
            <div className="row px-5 pt-5">
                <div className="col-sm-4">
                    <ListingBlock />
                </div>

                <div className="col-sm-4">
                    <ListingBlock />
                </div>

                <div className="col-sm-4">
                    <ListingBlock />
                </div>
            </div>
        </div>
    )
}

export default Course