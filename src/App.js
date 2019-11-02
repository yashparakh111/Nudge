import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import history from './History.js'

import LandingPage from "./components/LandingPage";
import DashboardScreen from "./components/DashboardScreen";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path={'/'}
                       component={LandingPage}
                />

                <Route path={'/dashboard'}
                       component={DashboardScreen}
                />
            </Router>
        )
    }
}

export default App;
