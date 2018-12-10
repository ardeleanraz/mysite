// Import the React and ReactDOM libraries
import React from 'react';
import './App.css'
import About from "./About";
import Button from "./Button"
import Contact from "./Contact"


//Create a react component

class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'Home'
        }
    }


    onClick = () => {
        this.setState({
            tab: 'AboutMe'

        });
    };

    onClickBack = () => {
        this.setState({
            tab: 'Home'

        })
    };


    render() {

        if (this.state.tab === 'Home') {

            return (
                <div>
                    <div className="  ui huge breadcrumb">
                        <a style={{color: 'darkgrey'}} className="section">Home</a>
                        <i className="right chevron icon divider"/>
                        <a onClick={this.onClick} style={{color: 'darkgrey'}} className=" section">About me</a>
                        <i className="right chevron icon divider"/>
                        <a style={{color: 'darkgrey'}} className=" section">Contact</a>
                        <div className="content">
                            <h1 style={{color: 'white'}}>Ardelean Razvan Vasile</h1>
                        </div>
                        <Button/>
                    </div>
                </div>

            )


        } else {
            return <div className="ui huge breadcrumb">
                <a onClick={this.onClickBack} style={{color: 'darkgrey'}} className="section"> Home</a>
                <About/>
            </div>


        }
    }
}


export default Text;