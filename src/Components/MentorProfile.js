import React, { useState, useEffect } from 'react';
import data from '../data';

export default function MentorProfile() {

    return(
        <div>
            <p>{data[0].name}</p>
        </div>
    );
}