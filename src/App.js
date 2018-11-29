// Import the React and ReactDOM libraries
import React from 'react';
import './App.css'


//Create a react component
const App = () => {

    const gitbutton = <a href="https://github.com/ardeleanraz">
        <button className="ui massive circular github icon button"><i className="github icon"> </i></button>
    </a>;

    const linkedin = <button className="ui massive circular linkedin icon button"><i className="linkedin icon"> </i>
    </button>;

    const text = <div>
        <h1 style={{color: 'white'}}>Ardelean Razvan Vasile</h1>
    </div>


    return (

        <div>
            <div className="content">
                {text}
            </div>
            <div className="dreapta-jos">
                {gitbutton}
                {linkedin}
            </div>
        </div>
    );
};


export default App;