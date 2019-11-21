import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Top from '../components/Home/Top';
import Mid from '../components/Home/Mid';
import Community from '../components/Home/Community';

const Home = () => {

  return (
    <div className='home'>
      {/* <FontAwesomeIcon size="md" className='icon' icon={faInstagram} /> */}
      <Top/>
      <Mid/>
      <Community/>
    </div>
  );
}

export default Home;


{/* below is a work in progress */}
{/* <div className='content'>
<p className='__container__text'>We craft stunning</p>
<ul className="content__container__list">
<li className="content__container__list__item">digital experiences</li>
<li className="content__container__list__item">mobile apps</li>
<li className="content__container__list__item">high conversion websites</li>
<li className="content__container__list__item">products</li>
</ul>
</div> */}