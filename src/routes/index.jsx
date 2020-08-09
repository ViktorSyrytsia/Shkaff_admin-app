import React from "react";
import {useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";

import {
    CategoriesPage,
    LoginPage,
    OrdersPage,
    ProductsPage,
    SubcategoriesPage,
    MenuPage,
    SettingsPage,
} from "../pages";

const Routes = () => {
    const {isAuth} = useSelector(({User, router}) => ({
        isAuth: User.isAuth,
        userName: User.userName,
        location: router.location.pathname,
    }))

    if (!isAuth) {
        return (
            <Switch>
                <Route exact path='/login'component={LoginPage}/>
            </Switch>
    )}

    return (
        <Switch>
            <Route exact path='/' component={MenuPage}/>
            <Route exact path='/categories' component={CategoriesPage}/>
            <Route exact path='/subcategories' component={SubcategoriesPage}/>
            <Route exact path='/products' component={ProductsPage}/>
            <Route exact path='/orders' component={OrdersPage}/>
            <Route exact path='/settings' component={SettingsPage}/>
        </Switch>
    )
}

export default Routes;
