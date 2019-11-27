import React from 'react';
import community from '../../../assets//images/community.png';

const Community = () => {
    return (
        <div className='community-section'>
            <p className='title'>COMMUNITY FIRST BUSINESS</p>
            <img className='community-bg' src={community} alt='Community'/>
            <div className="about">
                <p className='about-description'>The Grove is a recreational cannabis company rooted in the belief that community-first business is possible. We are committed to “dispensing equity” by providing critical resources to the community we serve. The Grove firmly believes that its work and commitment to community will help rewrite the narrative on recreational cannabis.</p>
            </div>
        </div>
    )
}

export default Community;
