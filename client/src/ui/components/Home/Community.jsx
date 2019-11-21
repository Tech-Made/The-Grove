import React from 'react';
import community from '../../../assets//images/community.png';

const Community = () => {
    return (
        <div className='community-section'>
            <p className='title'>COMMUNITY FIRST BUSINESS</p>
            <img className='community-bg' src={community} alt='Community'/>
            <div className="about">
                <p className='about-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nobis recusandae corporis tenetur deserunt, debitis veniam impedit a! Ratione dignissimos error dicta amet voluptatum, veritatis laborum? Et quaerat dolor ex.</p>
            </div>
        </div>
    )
}

export default Community;
