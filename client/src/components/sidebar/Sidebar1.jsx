import React from 'react'
import './Sidebar1.css'

function Sidebar1() {
    return (
        <div>
            <body data-spy="scroll" data-target="#myScrollspy" data-offset="1">
                <div className="container-fluid">
                    <div class="_row">
                        <nav class="col-sm-3 col-4" id = "myScrollspy">
                            <ul className="nav flex-column w-100">
                                <li className="tutorial my-2">
                                    <a className="tutorial text-dark" href="#tutorials">Tutorials</a>
                                </li>
                                <li className="active">
                                <li className="beginner my-2">
                                    <a className="beginner text-dark">Beginners</a>
                                        <li className="nav-item1 my-2 sidebar-item">
                                            <a className="nav-link active" href="#intro">Intro</a>
                                        </li>
                                        <li className="nav-item1 my-2 sidebar-item">
                                            <a className="nav-link active" href="#text">Text</a>
                                        </li>
                                        <li className="nav-item1 my-2 sidebar-item">
                                            <a className="nav-link active" href="#formatting">Formatting</a>
                                        </li>
                                        <li className="nav-item1 my-2 sidebar-item">
                                            <a className="nav-link active" href="#positioning">Positioning</a>
                                        </li>
                                  
                                </li>
                                </li>
                                <li className="advanced my-2">
                                    <a className="advanced text-dark" href="#advanced">Advanced</a>
                                </li>
                                <li className="cheatsheet my-2">
                                    <a className="cheatsheet text-dark" href="http://www.cheat-sheets.org/saved-copy/html-cheat-sheet.png">CheatSheet</a>
                                </li>


                            </ul>
                        </nav>
                        
                    </div>
                </div>
            </body>
            </div>
    )
}

export default Sidebar1
