import React from 'react'
import MainImage from "../images/kid_at_computer.jpg";

function home() {
    return (
        <div className="mainImage">
          <img style={{width: "100%"}}src={MainImage} alt="Kid at Computer Coding"/>
        </div>
    )
}

export default home
