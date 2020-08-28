import React from 'react';
import { createBrowserHistory } from "history";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import IndexPage from 'pages/Index';
import LoginPage from 'pages/Login';
import SignupPage from 'pages/Signup';
import Error404Page from 'pages/Error404';

const history = createBrowserHistory();

const ServiceRoute = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path="*" component={Error404Page} />
        </Switch>
    </Router>
)

export default ServiceRoute;