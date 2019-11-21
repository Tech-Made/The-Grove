import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/navbar.scss'
import logoblack from '../../assets/logos/logo-white.png';
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
                            <img className='nav-logo' alt='The Grove' src={logoblack} />
                        </Link>
                        <li><a className="header-text hover" href='/'></a></li>

                    </div>
                    <div>
                        <a target='_onblank' href='https://www.linkedin.com/in/zaidiasim/'><i className="icon hover fab fa-linkedin"></i></a>
                        <a target='_onblank' href='https://github.com/awesomezaidi'><i className="icon hover fab fa-github"></i></a>
                        <a target='_onblank' href='https://medium.com/@asimzaidi'><i className="icon hover fab fa-medium"></i></a>
                        <a target='_onblank' href="mailto:asimzaidih@gmail.com"><i className="icon hover fas fa-envelope"></i></a>
                    </div>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar
