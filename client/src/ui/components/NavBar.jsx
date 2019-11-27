import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/navbar.scss'
import logo from '../../assets/logos/logo-white.png';
import '../../styles/navbar.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
            <input type='checkbox' id='nav' className='hidden'/>
            <label htmlFor="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
    
            <div className="nav-wrapper">
                <ul>
                    <div>
                        <Link to='home'>
                            <img className='nav-logo' alt='The Grove' src={logo} />
                        </Link>
                        <li><a className="header-text hover" href='/'>Home</a></li>
                        <li><a className="header-text hover" href='/contact'>Contact</a></li>
                        <a target='_onblank' href='instagram.com/thegrove'><i className="icon hover fab fa-instagram"></i></a>
                    </div>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar
