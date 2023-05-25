import React from "react";
import "./AboutUs.css";
import { Link } from 'react-router-dom';
//terms of service page
const AboutUs = props => {
    return (
        <div className="AboutUs">
            <h1>About Us</h1>
            <p>Thanks for checking out our app!</p>
            <p>I am a college student who wanted to build something that would help me eat healthier and improve my cooking skills at the same time.</p>
            <p>However, the reason I developed this specefic app is to be able to cook with limited ingredients.</p>
            <p>The goal of this app is to be able to find recipes based on the limited number of ingredients most college students possess.</p>
            <p>Because I have a passion for cooking and my goal is that by using this app, you can develop one too</p>
            <p>If you have any suggestions, comments, or just want to get in contact with me, please do so below:</p>
            <li className="ContactLink"><Link to="/contactus">Contact Us</Link></li>
        </div>
    );
    }
export default AboutUs;