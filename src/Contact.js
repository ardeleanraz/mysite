// Import the React and ReactDOM libraries
import React from 'react';
import './css/contact.css'
import Button from "./Button";
import About from "./About";


//Create a react component

const Contact = () => {
    const contactMe = <h3><h1 style={{color:'darkgrey'}}> CONTACT</h1>40 756 799 721 <h3>ardeleanrazvan111@yahoo.com </h3> </h3>




return (

        <div>
            <div className="contact">
                {contactMe}
            </div>
            <Button/>
        </div>
    );
};

export default Contact;