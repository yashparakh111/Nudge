import React, { Component } from 'react';
import '../App.css';
import logo from "../logo.svg";
import {Link} from 'react-router-dom';
import firebase from 'firebase';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            userID: null
        };
        this.onClick = this.onClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    /*
     *
     */

    onClick() {
        console.log(this.props.firebase_root);
        var users = firebase.firestore().collection('users');
        var userID = users.where("name", "==", this.state.name).get()
            .then(querySnapshot => {
                console.log(querySnapshot.empty);
                if (querySnapshot.empty) {
                    users.add({name: this.state.name});
                }
            });
        this.setState({userID});
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

                    <Link className={'button-input'} onClick={this.onClick} to={"/dashboard"}>
                        Enter
                    </Link>
                </header>
            </div>
        );
    }
}

export default LandingPage;
