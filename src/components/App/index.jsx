import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";


import Header from '../Header';
import { CategoriesPage, SubcategoriesPage, ProductsPage, PurchasesPage } from '../../pages';
import { getCategories } from "../../redux/category/category.actions";
import { getSubcategories } from "../../redux/subcategory/subcategory.actions";
import { getProducts } from "../../redux/product/product.actions";
import {getPurchases} from "../../redux/purchase/purchase.actions";
import Snackbar from "../Snackbar";

import './style.scss';

const App = () => {
        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(getCategories());
                dispatch(getSubcategories());
                dispatch(getProducts());
                dispatch(getPurchases());
        }, [dispatch])


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
