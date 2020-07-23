import { combineReducers } from 'redux';

import Categories from './category/category.reducer'
import Subcategories from './subcategory/subcategory.reducer'
import Products from './product/product.reducer'
import Purchases from './purchase/purchase.reducer'
import Snackbar from './snackbar/snackbar.reducer'

export default combineReducers({
    Categories,
    Snackbar,
    Subcategories,
    Products,
    Purchases
});
