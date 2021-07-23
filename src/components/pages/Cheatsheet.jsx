import React from 'react'
import { Link } from 'react-router-dom'

function Cheatsheet() {
    return (
        <div>
        <div className="card p-3 my-3">
            <div className="d-flex justify-content-between">
                <Link className="card-title" to="http://www.cheat-sheets.org/saved-copy/html-cheat-sheet.png" ><h4 className=" text-dark">HTML CheatSheet</h4></Link>
            </div>
            <p className="text-left">This is the HTML Cheatsheet</p>
        </div>
        </div>
    )
}

export default Cheatsheet
