import { combineReducers } from 'redux';

import Categories from './category/category.reducer'
import Subcategories from './subcategory/subcategory.reducer'
import Snackbar from './snackbar/snackbar.reducer'

export default combineReducers({
    Categories,
    Subcategories,
    Snackbar
});
