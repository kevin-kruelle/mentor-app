import React from 'react';
import './index.css';

function header(){

    return (
        <div className="container">
            <h1>Menty</h1>
            <div className="tabContainer">
        
                <div className="tab"><a href="#" >Home</a></div>
                <div className="tab"><a href="#" >Opportunities</a></div>
                <div className="tab"><a href="#" >Mentors</a></div>
                <div className="tab"><a href="#" >Contact Us</a></div>
            </div>
        </div>

    );
}

export default header;