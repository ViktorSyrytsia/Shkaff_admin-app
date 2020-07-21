import { combineReducers } from 'redux';

import Categories from './category/category.reducer'
import Snackbar from './snackbar/snackbar.reducer'

export default combineReducers({
    Categories,
    Snackbar
});
