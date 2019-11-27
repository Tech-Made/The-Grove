import React from 'react';
import giveback from '../../../assets/images/giveback.png';
import flier from '../../../assets/images/flier.png';
const Mid = () => {
    return (
        <div className='mid-section'>
            <img className='giveback' alt='The Grove' src={giveback} />
            <div className="flier-container">
                <a target='_blank' href='https://chronicconversation.splashthat.com/'>
                    <button className="btn-primary rsvp">
                        RSVP
                    </button>
                </a>
                <img className='flier' alt='Flier' src={flier}/>
            </div> 
        </div>
    )
}


export default Mid;
