import React from 'react';
import '../../styles/home.scss';
import Top from '../components/Home/Top';
import Mid from '../components/Home/Mid';
import Community from '../components/Home/Community';
import Store from '../components/Home/Store';

const Home = () => {

  return (
    <div className='home'>
      {/* <FontAwesomeIcon size="md" className='icon' icon={faInstagram} /> */}
      <Top/>
      <Mid/>
      <Community/>
      {/* <Compare/> */}
      <Store/>
    </div>
  );
}

export default Home;
