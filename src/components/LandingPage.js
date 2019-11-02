import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.svg";

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
        this.onClick = this.onClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    // handles onClick
    onClick() {
        // route to the next page
    }

    /* this keeps track of the name field
     * and changes the state accordingly
     */
    onNameChange(e) {
        this.setState({name:e.target.value});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <input onChange={this.onNameChange} className={'text-input'} id={'name'} placeholder={'Enter your name'} />
                    <button className={'button-input'}>
                        Enter
                    </button>
                </header>
            </div>
        );
    }
}

export default LandingPage;
