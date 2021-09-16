import React from 'react'

const mentorList = ["Frank", "Jim", "Beans"]

const Gallery = () => {
    return (
        <div>
            {mentorList.map(
                mentor => 
                <p>{mentor}</p>)}
        </div>
    )
}

export default Gallery;
