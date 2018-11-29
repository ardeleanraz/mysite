import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: 'PageOne'
        }
    }

    onClick = () => {
        this.setState({
            tab: 'PageTwo'

        });
    };

    onClickBack = () => {
        this.setState({
            tab: 'PageOne'
        })
    };


    render() {

        if (this.state.tab === 'PageOne') {

            return (
                <div>
                    <App/>
                    <div className="  ui huge breadcrumb">
                        <a onClick={this.onClick} style={{color: 'darkgrey'}} className="section">Home</a>
                        <i className="right chevron icon divider"> </i>
                        <a style={{color: 'darkgrey'}} className=" section">Registration</a>
                        <i className="right chevron icon divider"> </i>
                        <a style={{color: 'darkgrey'}} className=" section">Personal Information</a>
                        <i className="right chevron icon divider"> </i>
                        <a style={{color: 'darkgrey'}} className=" section">Registration</a>

                    </div>
                </div>
            )


        } else {
            return <div>
                <button onClick={this.onClickBack}> PageOne</button>
            </div>

        }
    }
}

ReactDOM.render(<Text/>, document.getElementById("root"));