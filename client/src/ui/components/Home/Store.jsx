import React,  { useState } from 'react';
import axios from 'axios';
import store from '../../../assets//images/store.png';

const Compare = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('OK');
    
    const handleSubmit = async () => {
        console.log('submitting... :', email);
        
        setLoading('LOADING');
        try {
            const _ = await axios.post('http://localhost:5000/join', {email});
            // const _ = await axios.post('http://localhost:5000/join', {email});
            setLoading('SENT');
        } catch(e) {
            setLoading('ERROR');
        }
    }

    return (
        <div className='store-section'>
            <p className='title'>STORE COMING SOON</p>
            <img className='store' src={store} alt='Store'/>
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
    )
}

export default Compare;
