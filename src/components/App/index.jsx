import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Header from '../Header';
import { CategoriesPage, SubcategoriesPage, ProductsPage, PurchasesPage } from '../../pages';
import Snackbar from "../Snackbar";

import './style.scss';

const App = () => {


        return (
                <>
                        <Header />
                        <Switch>
                                <Route exact path='/categories'>
                                        <CategoriesPage />
                                </Route>
                                <Route exact path='/subcategories'>
                                        <SubcategoriesPage />
                                </Route>
                                <Route exact path='/products'>
                                        <ProductsPage />
                                </Route>
                                <Route exact path='/purchases'>
                                        <PurchasesPage />
                                </Route>
                        </Switch>
                        <Snackbar />
                </>
        )
}

export default App
