import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Error404Page from 'pages/Error404Page';
import Error500Page from 'pages/Error500Page';
import IndexPage from 'pages/IndexPage';

const ServiceRoute = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route path="/:locale(en|am)?/error" component={Error500Page} />
            <Route path="*" component={Error404Page} />
        </Switch>
    </Router>
)

export default ServiceRoute;