import * as React from 'react';
import './about.css';
import ApprovalIcon from '@mui/icons-material/Approval';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Gallery from './Components/mentorGallery';


function About(){
    return (
        <Router>
            <div className="titleContainer">
                <div className="titleBox">
                    <p className="title">Strengthening the technology ecosystem by creating mutually beneficial relationships between communities and corporate partners.</p>
                </div>
            </div>
            <div>
                <h2 style={{marginTop: 80}} className="title">Get Involved</h2>
            </div>
            <div className="container">
                <div className="subContainer">
                    <ApprovalIcon />
                    <h3>Partner With Us</h3>
                    <p>Become a Mentor today! Fill out a form about your skills get involved!</p>
                    <button>Learn More</button>
                </div>
                <div className="subContainer">
                    <AccessibilityNewIcon />
                    <h3>Learn With Us</h3>
                    <p>Get skills you need to be employable in any economy. View potential Mentor's!</p>
                    <button>Find a Mentor</button>
                </div>
                <div className="subContainer">
                    <AccountBalanceIcon />
                    <h3>Donate/Volunteer</h3>
                    <p>You have the power to make an impact by donating your time and resources.</p>
                    <button>Get involved</button>
                </div>
            </div>
        </Router>
    );
}

export default About;