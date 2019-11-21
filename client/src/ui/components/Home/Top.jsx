import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logofullwhite from '../../../assets/logos/logofullwhite.png';
import who from '../../../assets/images/who-we-are.png';
import {
    CircularProgress
} from '@material-ui/core';

const Top = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('OK');

    useEffect(() => [
        axios.get('/')
    ], [])

    const handleSubmit = async () => {
        console.log('submitting... :', email);
        
        setLoading('LOADING');
        try {
            const _ = await axios.post('https://localhost:5000/join', {email});
            // const _ = await axios.post('http://localhost:5000/join', {email});
            setLoading('OK');
        } catch(e) {
            setLoading('ERROR');
        }
    }

    return (
        <>
            <img className='logo' alt='The Grove' src={logofullwhite} />
            <div className='mid'>
            <div className='about'>
                <img className='semi-title' src={who} alt='Who We Are' />
                <p className='text bio'>
                We are a community-based adult-use recreational cannabis dispensary opening in Aurora, Illinois.
                Our goal is to promote health and wellness by providing a local and safe environment to dispense cannabis products.
                </p>
            </div>
            <div className='subscribe'>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='email-input'
                    type='text'
                    placeholder='Email'
                />
                    {
                        loading === 'LOADING' &&
                        <CircularProgress/>
                    }
                    {
                        loading === 'OK' &&
                        <button
                            className='long-btn'
                            disabled={email.length < 3}
                            onClick={handleSubmit}
                        >
                            Get Updates
                        </button>
                    }
                    {
                        loading === 'ERROR' &&
                        <p>Uh oh! Something went wrong!</p>
                    }
            </div>
            </div>
        </>
    )
}

export default Top;
