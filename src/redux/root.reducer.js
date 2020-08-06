import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";

import Categories from './category/category.reducer'
import Subcategories from './subcategory/subcategory.reducer'
import Products from './product/product.reducer'
import Orders from './order/order.reducer'
import User from './user/user.reducer'
import Snackbar from './snackbar/snackbar.reducer'

const rootReducer = (history) =>
    combineReducers({
        Categories,
        Snackbar,
        Subcategories,
        Products,
        Orders,
        User,
        router: connectRouter(history)
    });

export default rootReducer;
