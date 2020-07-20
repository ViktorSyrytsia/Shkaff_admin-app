import { all } from 'redux-saga/effects';

import categorySaga from "./category/category.saga";

export default function* rootSaga() {
    yield all([categorySaga()]);
}
