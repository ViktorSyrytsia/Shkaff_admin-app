import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import Header from '../Header';
import {getCategories} from "../../redux/category/category.actions";
import {getSubcategories} from "../../redux/subcategory/subcategory.actions";
import {getProducts} from "../../redux/product/product.actions";
import {getOrders} from "../../redux/order/order.actions";
import {checkUserByToken} from "../../redux/user/user.actions";
import Snackbar from "../Snackbar";
import Routes from '../../routes'

import './style.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserByToken());
        dispatch(getCategories({}));
        dispatch(getSubcategories());
        dispatch(getProducts());
        dispatch(getOrders());
    }, [dispatch])

    return (
        <>
            <Header/>
            <Routes/>
            <Snackbar/>
        </>
    )
}

export default App
