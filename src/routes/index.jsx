import React from "react";
import {Route, Switch} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";

import {
    CategoriesPage,
    LoginPage,
    OrdersPage,
    ProductsPage,
    SubcategoriesPage
} from "../pages";
import {history} from "../store/store";

const Routes = () => {

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/'>
                    <LoginPage/>
                </Route>
                <Route exact path='/categories'>
                    <CategoriesPage/>
                </Route>
                <Route exact path='/subcategories'>
                    <SubcategoriesPage/>
                </Route>
                <Route exact path='/products'>
                    <ProductsPage/>
                </Route>
                <Route exact path='/orders'>
                    <OrdersPage/>
                </Route>
            </Switch>
        </ConnectedRouter>
    )
}

export default Routes;
