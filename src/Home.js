// Import the React and ReactDOM libraries
import React from 'react';
import './css/home.css'
import About from "./About";
import Button from "./Button"
import Contact from "./Contact"
import Cv from "./Contact"


//Create a react component

class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'Home'
        }
    }


    goToCv = () => {
        this.setState({
            tab: 'Cv'

        });
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
                    <div className="content">
                        <h1 onClick={this.goToAbout} style={{color: 'white'}}>Ardelean Razvan Vasile</h1>
                    </div>
                    <Button/>
                </div>


            );


        }
        if (this.state.tab === 'AboutMe') {
            return (
                <div>
                    <div className="text">
                        <div>
                            <div onClick={this.goToMenu} className="ui huge animated button" tabIndex="0">
                                <div className="visible content">Home</div>
                                <div className="hidden content">
                                    <i className="left arrow icon"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <About/>
                    </div>
                    <div>
                        <Button/>
                    </div>
                </div>


            )
        }
        if (this.state.tab === 'Cv') {
            return (
                <div>
                    <div>
                        <div className="text">
                            <div onClick={this.goToMenu} className="ui huge animated button" tabIndex="0">
                                <div className="visible content">Menu</div>
                                <div className="hidden content">
                                    <i className="left arrow icon"> </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>

            )
        }
    }
}


export default Text;