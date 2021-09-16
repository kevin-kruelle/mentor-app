import React from 'react'
import MainImage from "../images/kid_at_computer.jpg";
import About from "./about";

function home() {
    return (
        <div className="mainImage">
          <img style={{width: "100%"}}src={MainImage} alt="Kid at Computer Coding"/>
          <About />
        </div>
    )
}

export default home
