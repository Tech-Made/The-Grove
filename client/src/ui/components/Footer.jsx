import React from 'react';
import logofullwhite from '../../assets/logos/logofullwhite.png';
import '../../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <img alt='Grove' className='footer-logo' src={logofullwhite}/>
            <a className='igIcon'
            target='_blank' 
            rel='noopener noreferrer'
            href='https://instagram.com/thegroveaurora'>
                <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                />
            </a>
        </footer>

    )
}

export default Footer;
