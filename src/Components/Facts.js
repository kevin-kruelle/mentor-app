import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Facts.css';
import img from '../images/facts-img.png';

export default function Facts(){
    return(
        <div className='facts-flex'>
            <img src={img} />
            <div className='text-container'>
                <h3>Demographics</h3>
                <ul>
                    <li>
                        Women make up 25% of computer jobs, and this has gone down from 32% since the 90s
                    </li>
                    <li>
                        Black and Hispanic workers are still far underrepresented in computer science STEM jobs, 
                        with Asian workers only marginally more
                    </li>
                </ul>
                <h3>The Benefits of Mentorship</h3>
                <Typography variant="body1" gutterBottom>
                <strong>"</strong>We found that when asked at the beginning of the camp, 
                    our middle students largely reported that they 
                    did not have any role-models or mentors in computing. 
                    However, at the conclusion of the camp, these same students 
                    indicated that they developed strong connections with their near-peer mentors and even 
                    saw them as role-models. These findings highlight the need for more 
                    mentorship opportunities for students of all ages, and the 
                    importance of providing resources and support to help develop and 
                    nurture these connections.<strong>"</strong>
                </Typography>
                <button>Find a Mentor! </button>
            </div>
        </div>
    );
}