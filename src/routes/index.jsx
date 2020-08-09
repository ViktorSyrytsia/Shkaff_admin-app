import React from "react";
import {useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";

import {
    CategoriesPage,
    LoginPage,
    OrdersPage,
    ProductsPage,
    SubcategoriesPage,
    MenuPage
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
                <Route exact path='/login'>
                    <LoginPage/>
                </Route>
            </Switch>
    )}

    return (
        <Switch>
            <Route exact path='/'>
                <MenuPage/>
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
    )
}

export default Routes;
