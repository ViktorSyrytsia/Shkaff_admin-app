import { all } from 'redux-saga/effects';

import categorySaga from "./category/category.saga";
import subcategorySaga from "./subcategory/subcategory.saga";

export default function* rootSaga() {
    yield all([categorySaga()]);
    yield all([subcategorySaga()]);
}
