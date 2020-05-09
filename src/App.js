import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SignUpPage from "./pages/sign-up/sign-up.pages";
import HomePage from "./pages/home-page/home.page";

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/sign-up' component={SignUpPage}/>
                        <Route exact path='/' component={HomePage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
