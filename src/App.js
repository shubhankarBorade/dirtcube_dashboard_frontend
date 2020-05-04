import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SignUpPage from "./pages/sign-up/sign-up.pages";
import OverviewPage from "./pages/overview-page/overview.page";


// import {Card} from "./components/card/card.component";

class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/sign-up' component={SignUpPage}/>
                        <Route exact path='/overview' component={OverviewPage}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
