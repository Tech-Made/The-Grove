import React, { useState } from 'react';
import axios from 'axios';
import logofullwhite from '../../../assets/logos/logofullwhite.png';
import who from '../../../assets/images/who-we-are.png';

const Top = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('OK');

    const handleSubmit = async () => {        
        setLoading('LOADING');
        try {
            await axios.post('http://localhost:5000/join', {email});
            // const _ = await axios.post('http://localhost:5000/join', {email});
            setLoading('SENT');
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
                <button
                    className='long-btn'
                    disabled={email.length < 3 || loading === 'LOADING' || loading === 'SENT'}
                    onClick={handleSubmit}
                >
                    {loading === 'LOADING' && 'Loading'}
                    {loading === 'OK' && 'Get Updates'}
                    {loading === 'SENT' && "You're in!"}
                </button>
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
