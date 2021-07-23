import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">
                    <ul className="nav flex-column">
                        <li>                
                            <a className="active" href="#popular">Popular</a>
                        </li>
                        <li>
                            <a className="active" href="#help">Help</a>
                        </li>
                        <li>
                            <a className="active" href="#collaboration">Collaboration</a>
                        </li>
                        <li>
                            <a className="active" href="#career">Career</a>
                        </li>
                        <li>
                            <a className="active" href="#general">General</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
