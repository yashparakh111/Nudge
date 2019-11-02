import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.svg";

import firebase from 'firebase';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
        this.onClick = this.onClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    /*
     *
     */

    onClick() {
        console.log(this.props.firebase_root);
    }

    /* keeps track of the name field
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

                    <input value={this.state.name} onChange={this.onNameChange} className={'text-input'} id={'name'} placeholder={'Enter your name'} />

                    <button className={'button-input'} onClick={this.onClick}>
                        Enter
                    </button>
                </header>
            </div>
        );
    }
}

export default LandingPage;
