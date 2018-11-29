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
            return <div>

                <button onClick={this.onClick}>PageTwo</button>
            </div>
        } else {
            return <div>
                <button  onClick={this.onClickBack}> PageOne </button>
            </div>

        }
    }
}

ReactDOM.render(<Text/>, document.getElementById("root"));