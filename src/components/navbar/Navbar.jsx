import React, {useState} from 'react'
import './navbar.css'

//Icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#services'>Services</a></p>
    <p><a href='#works'>Works</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='https://drive.google.com/file/d/1QDqnl9HvnNNSbP7tL59JWF5DuNVRBFEK/view?usp=sharing' target="_blank">Download CV</a></p>
    </>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='portfolio-navbar'>
            <div className='portfolio-navbar-links'>
                {/* <div className='portfolio-navbar-links-logo'>
                    <img src={logo} alt="Logo" />
                </div> */}
                <div className='portfolio-navbar-links-container'>
                    <Menu />
                </div>
                <div className='portfolio-navbar-ctabtn'>
                    <a href='#contact'>Get in touch</a>
                </div>
                <div className='portfolio-navbar-menu'>
                    {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='portfolio-navbar-menu-container scale-up-tr'>
                            <div className='portfolio-navbar-menu-container-links'>
                                <Menu />
                                <div className='portfolio-navbar-menu-container-links-ctabtn'>
                                    <a className='portfolio-navbar-menu-ctabtn' href='#contact'>Get in touch</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
