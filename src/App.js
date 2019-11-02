import React from 'react';
import firebase from 'firebase';
import history from './History.js'
import { Router, Route } from "react-router-dom";
import './App.css';

import StudyScreen from './components/StudyScreen';
import LandingPage from "./components/LandingPage";
import DashboardScreen from "./components/DashboardScreen";
import DataCollectionScreen from "./components/DataCollectionScreen";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firebase_root: null}
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBsUEvz7Kygc2E-F_3gviK9w-pbuq_Ky58",
            authDomain: "nudge-5bf87.firebaseapp.com",
            databaseURL: "https://nudge-5bf87.firebaseio.com",
            projectId: "nudge-5bf87",
            storageBucket: "nudge-5bf87.appspot.com",
            messagingSenderId: "373645012858",
            appId: "1:373645012858:web:83c2f54744c54cec1db0c3",
            measurementId: "G-67S1QSXRT8"
        };

        try {
            firebase.initializeApp(firebaseConfig);
            console.log("Firebase Initialized");
        } catch (err) {
            console.log(err);
        }
        // create a reference to a classroom
        const firebase_root = firebase.firestore();
        //firebase_root.collection("users").add({name: "Jimmy", id: {emailid: 2, utid: 3}});
        this.setState({firebase_root});
    }

    render() {
        return (
            <Router history={history}>
                <Route exact path={'/'}
                       component={LandingPage}
                />

                <Route path={'/dashboard'}
                       component={DashboardScreen}
                />

                <Route path={'/study'}
                       component={StudyScreen}
                />

                <Route path={'/dataCollection'}
                       component={DataCollectionScreen}
                />
            </Router>

        )
    }
}
