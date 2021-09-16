import React, { useState, useEffect } from 'react';
import MentorProfile from './MentorProfile';
import MentorCard from './mentorCard';
import data from '../data';
import { flexbox } from '@mui/system';
import './mentorGallery.css';

const Gallery = () => {

    useEffect(()=>{
        console.log(data);
    });

    return (
        <div className='card-container'>
            {data.map(mentor => 
               <MentorCard 
                data={mentor}
               /> 
            )}
        </div>
    )
}

export default Gallery;