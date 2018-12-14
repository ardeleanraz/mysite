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


    const skills = <h3>Now i Know:
        <h3> Python </h3>
        <h3> Django</h3>
        <h3>Basic Algorithms</h3>
        <h3>React.js </h3>
        <h3> Linux</h3>
        <h3> CSS , HTML</h3>
    </h3>



    const cv = <a href="https://www.dropbox.com/s/wdyiy2dbw7ji2fb/CV-Razvan-Ardelean.pdf?dl=0">
        <div className="ui huge animated button" tabIndex="0">
            <div className="visible content">Check my Cv</div>
            <div className="hidden content">
                <i className="left arrow icon"> </i>
            </div>
        </div>
    </a>


    return (

        <div>
            <div className="about">
                {AboutMe}
            </div>
            <div className="skill">
                {skills}
            </div>
        <div className="cv">
            {cv}
        </div>
            <Button/>
        </div>
    );
};

export default About;




