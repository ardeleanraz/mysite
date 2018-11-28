// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a react component
const App = () => {

    const gitbutton = <a href="https://github.com/ardeleanraz"><button className="ui circular github icon button"><i className="github icon"> </i></button></a>;

    const linkedin = <button className="ui circular linkedin icon button"><i className="linkedin icon"> </i></button>;

    const text = <div>
        <h1 style={{color: 'white'}}>Ardelean Razvan Vasile</h1>
        <button onClick={alert('NU ATINGE')}  style= {{ backgroundColor: 'darkgrey' ,color: 'black'}}> Don't touch the button!!!</button>

    </div>

    const tab = <div className="  ui mini breadcrumb">
        <a style={{color: 'darkgrey'}} className="section">Home</a>
        <i className="right chevron icon divider"> </i>
        <a style={{color: 'darkgrey'}} className=" section">Registration</a>
        <i className="right chevron icon divider"> </i>
        <a style={{color: 'darkgrey'}} className=" section">Personal Information</a>
        <i className="right chevron icon divider"> </i>
        <a style={{color: 'darkgrey'}} className=" section">Registration</a>
    </div>


    return (

        <div>
            {tab}
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



ReactDOM.render(<App />, document.querySelector('#root'));





