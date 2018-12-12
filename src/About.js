// Import the React and ReactDOM libraries
import React from 'react';
import './css/about.css'
import Button from "./Button";


//Create a react component
const About = () => {

    const AboutMe = <h3> Hello , my name is Ardelean Razvan Vasile.
        <h3>I am 21 years old .</h3>
        <h3>I started the faculty of construction,</h3>
        <h3>and after 2 years
        I left because it was not what I liked,</h3>
        then my brother began to teach me programming.</h3>;





    return (

        <div>
            <div className="about">
                {AboutMe}
            </div>
            <Button/>
        </div>
    );
};

export default About;





