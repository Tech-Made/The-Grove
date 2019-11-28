import React, { useState } from 'react';
import '../../styles/home.scss';
import Top from '../components/Home/Top';
import Mid from '../components/Home/Mid';
import Community from '../components/Home/Community';
import Store from '../components/Home/Store';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import logofullwhite from '../../assets/logos/logo-black.svg';

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div className='home'>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      >
        <div className={classes.paper}>
          <img src={logofullwhite} alt='Grove' className={classes.modalLogo}/>
          <p className='title'>Adults Over 21 Years Of Age Only</p>
          <p className='text-black'>
          You must be 21 years old or older to view this website.
          </p>
          <p className='text-black'>
          Are you over 21 years of age?
          </p>
          <button
            className='btn-primary'
            onClick={() => setOpen(false)}
          >
            ENTER
          </button>
          <a href='https://google.com'>
            <button
              className='btn-primary no-btn'
            >
              LEAVE
            </button>
          </a>
        </div>
      </Modal>

      <Top/>
      <Mid/>
      <Community/>
      <Store/>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  modalLogo: {
    maxWidth:  '4em'
  }
}));

export default Home;
