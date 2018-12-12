// Import the React and ReactDOM libraries
import React from 'react';
import './css/contact.css'
import Button from "./Button";
import About from "./About";


//Create a react component

class Cv extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'AboutMe'
        }
    }

    goToCv = () => {
        this.setState({
            tab: 'CV'

        });
    };

    goToMenu = () => {
        this.setState({
            tab: 'AboutMe'

        })
    };


    render() {

        if (this.state.tab === 'AboutMe') {

            return (
                <div>
                    <div className="cv">
                        <div onClick={this.goToCv} className="ui huge animated button" tabIndex="0">
                            <div className="visible content">Check my Cv</div>
                            <div className="hidden content">
                                <i className="left arrow icon"> </i>
                            </div>
                        </div>
                    </div>
                </div>
            )


        }
        if (this.state.tab === 'CV') {
            return (
                <div>
                    <div className="cv">
                        <div onClick={this.goToMenu} className="ui huge animated button" tabIndex="0">
                            <div className="visible content">Check my Cv</div>
                            <div className="hidden content">
                                <i className="left arrow icon"> </i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <About/>
                    </div>
                </div>

            )
        }


    }
}


export default Cv;


