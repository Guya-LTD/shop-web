import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Error404Page from 'pages/Error404Page';
import Error500Page from 'pages/Error500Page';
import IndexPage from 'pages/IndexPage';
import SearchPage from 'pages/SearchPage';
import ItemView from 'pages/ItemView';
import OrdersList from 'pages/OrdersList';
import CartPage from 'pages/CartPage';

const ServiceRoute = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/:locale(en|am)?" component={IndexPage} />
            <Route exact path="/:locale(en|am)?/search" component={SearchPage} />
            <Route exact path="/:locale(en|am)?/item/:id" component={ItemView} />
            <Route exact path="/:locale(en|am)?/home/orders" component={OrdersList} />
            <Route exact path="/:locale(en|am)?/cart" component={CartPage} />
            <Route path="/:locale(en|am)?/error" component={Error500Page} />
            <Route path="*" component={Error404Page} />
        </Switch>
    </Router>
)

export default ServiceRoute;