import React from 'react'
import './navbar.css'

//Icons
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'

import logo from '../../assets/logo.svg'

function Navbar() {
    return (
        <div className='portfolio-navbar'>
            <div className='portfolio-navbar-links'>
                <div className='portfolio-navbar-links-logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='portfolio-navbar-links-container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#services'>Services</a></p>
                    <p><a href='#works'>Works</a></p>
                    <p><a href='#about'>About</a></p>
                </div>
                <div className='portfolio-navbar-ctabtn'>
                    <button type='button'>Get in touch</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
