import { takeEvery, call, put } from 'redux-saga/effects';

import {
        setProduct,
        setProducts,
        showLoading,
        hideLoading
} from './product.actions';
import {
        setSnackbarMessage,
        setSnackbarSeverity,
        setSnackbarVisibility,
} from '../snackbar/snackbar.actions';
import {
        getProduct,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct
} from '../../utils/product';
import {
        GET_PRODUCT,
        GET_PRODUCTS,
        ADD_PRODUCT,
        UPDATE_PRODUCT,
        DELETE_PRODUCT
} from './product.types';

import { SNACKBAR_MESSAGES } from "../../components/config";

function* handleProductLoad({ payload }) {
        try {
                yield put(showLoading());
                const products = yield call(getProduct, payload);
                yield put(setProduct(products.data.getProduct));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleProductsLoad() {
        try {
                yield put(showLoading());
                const products = yield call(getProducts);
                yield put(setProducts(products.data.getProducts));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleAddProduct({ payload }) {
        console.log(payload);
        try {
                yield call(addProduct, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.add.success));
                yield put(setSnackbarVisibility(true));

                yield put(showLoading());
                const products = yield call(getProducts);
                yield put(setProducts(products.data.getProducts));
                yield put(hideLoading());

        } catch (err) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.add.error));
                yield put(setSnackbarVisibility(true));
                console.log('error:', err);
        }
}

function* handleUpdateProduct({ payload }) {
        try {
                yield call(updateProduct, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.success));
                yield put(setSnackbarVisibility(true));

                yield put(showLoading());
                const products = yield call(getProducts);
                yield put(setProducts(products.data.getProducts));
                yield put(hideLoading());

        } catch (error) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.error));
                yield put(setSnackbarVisibility(true));
                console.log(error);
        }
}

function* handleDeleteProduct({ payload }) {
        try {
                yield call(deleteProduct, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.success));
                yield put(setSnackbarVisibility(true));

                yield put(showLoading());
                const products = yield call(getProducts);
                yield put(setProducts(products.data.getCategories));
                yield put(hideLoading());

        } catch (error) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.error));
                yield put(setSnackbarVisibility(true));
                console.log(error);
        }
}

export default function* productSaga() {
        yield takeEvery(GET_PRODUCT, handleProductLoad);
        yield takeEvery(GET_PRODUCTS, handleProductsLoad);
        yield takeEvery(ADD_PRODUCT, handleAddProduct);
        yield takeEvery(UPDATE_PRODUCT, handleUpdateProduct);
        yield takeEvery(DELETE_PRODUCT, handleDeleteProduct);
}
