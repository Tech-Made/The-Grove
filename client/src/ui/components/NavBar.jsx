import React from 'react';
import '../../styles/navbar.scss'
import logo from '../../assets/logos/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

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
                        <li>
                            <img
                                className='nav-logo'
                                target='_blank'
                                rel='noopener noreferrer'
                                alt='The Grove'
                                src={logo}
                            />
                        </li>
                        <li><a className="header-text hover">Home</a></li>
                        <li>
                            <a
                                className="header-text hover"
                                target='_blank'
                                rel='noopener noreferrer'
                                href='https://chronicconversation.splashthat.com/'
                            >
                                RSVP
                            </a>
                        </li>
                        <li>
                            <a
                                className='igIcon'
                                rel='noopener noreferrer'
                                target='_blank'
                                href='https://instagram.com/the_groveaurora'>
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="2x"
                                />
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar
