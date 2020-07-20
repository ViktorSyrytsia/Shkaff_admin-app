import { combineReducers } from 'redux';

import Category from './category/category.reducer'

const rootReducer = () =>
    combineReducers({
        Category,
    });

export default rootReducer;
