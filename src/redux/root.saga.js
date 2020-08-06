import { all } from 'redux-saga/effects';

import categorySaga from "./category/category.saga";
import subcategorySaga from "./subcategory/subcategory.saga";
import productSaga from "./product/product.saga";
import orderSaga from "./order/order.saga";
import userSaga from "./user/user.saga";

export default function* rootSaga() {
    yield all([categorySaga(), subcategorySaga(), productSaga(), orderSaga(), userSaga()]);
}
