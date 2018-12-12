// Import the React and ReactDOM libraries
import React from 'react';
import './css/home.css'
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


    goToSkills = () => {
        this.setState({
            tab: 'Skills'
        })
    };

    goToContact = () => {
        this.setState({
            tab: 'Contact'
        })
    };


    goToAbout = () => {
        this.setState({
            tab: 'AboutMe'

        });
    };

    goToMenu = () => {
        this.setState({
            tab: 'Home'

        })
    };


    render() {

        if (this.state.tab === 'Home') {

            return (
                <div>
                    <div className='tabu'>
                        <div className="  ui massive breadcrumb">
                            <a style={{color: 'red'}} className="section">Home</a>
                            <i className="right chevron icon divider"/>
                            <a onClick={this.goToAbout} style={{color: 'darkgrey'}} className=" section">About me</a>
                            <i className="right chevron icon divider"/>
                            <a onClick={this.goToSkills} style={{color: 'darkgrey'}} className="section">Skills</a>
                        </div>
                    </div>
                    <div className="content">
                        <h1 style={{color: 'white'}}>Ardelean Razvan Vasile</h1>
                    </div>
                    <Button/>
                </div>


            );


        }

        if (this.state.tab === 'AboutMe') {

            return <div className="ui massive breadcrumb">

                <a onClick={this.goToMenu} style={{color: 'darkgrey'}} className="section"> Home</a>
                <i className="right chevron icon divider"/>
                <a onClick={this.goToAbout} style={{color: 'darkgrey'}} className=" section">About me</a>

                <i className="right chevron icon divider"/>
                <a onClick={this.goToSkills} style={{color: 'darkgrey'}} className="section">Skills</a>
                <About/>
            </div>


        }
        if (this.state.tab === 'Skills') {
            return <div className="ui massive breadcrumb">
                <a onClick={this.goToMenu} style={{color: 'darkgrey'}} className="section"> Home</a>
                <i className="right chevron icon divider"/>
                <a onClick={this.goToAbout} style={{color: 'darkgrey'}} className=" section">About me</a>
                <i className="right chevron icon divider"/>
                <a onClick={this.goToSkills} style={{color: 'darkgrey'}} className="section">Skills</a>
                <Button/>
            </div>


        }


    }
}


export default Text;