
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [user, setUser] = useState()


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showBtn = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showBtn()

    }, [])

    window.addEventListener('resize', showBtn)
    return (
        <>
            <nav className="navbar sticky-top">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo text-decoration-none" onClick={closeMobileMenu}>
                        <h2 className="">Geekies</h2>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                                Courses
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                                Community
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                                Pricing
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                {/* Profile */}
                                {/* <i className="fas fa-user-circle fa-2x" /> */}
                                <button className="btn btn-info">Login</button>

                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
