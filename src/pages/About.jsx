import React from "react";
import "./About.css";

export const About = () => {
    return (
        <>
            <div className="container">
                <h5> About Us </h5>
                <br />
                <h6>Where developers connect</h6>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="img">
                <img src="./src/assets/aboutus.png" alt="" />
            </div>
        </>
    )
}

export default About;
