import React from 'react';
import giveback from '../../../assets/images/giveback.png';
import flier from '../../../assets/images/flier.png';

const Mid = () => {
    return (
        <div className='mid-section'>
            <img className='giveback' alt='The Grove' src={giveback} />
            <div className="flier-container">
                <button
                    className="btn-primary rsvp"
                >
                    RSVP
                </button>
                <img className='flier' alt='Flier' src={flier}/>
            </div>
        </div>
    )
}

export default Mid;
