import { takeEvery, call, put } from 'redux-saga/effects';

import {
        setPurchases,
        showLoading,
        hideLoading
} from './purchase.actions';
import {
        getPurchases,
        updatePurchaseStatus,
        deletePurchase,
} from '../../utils/purchase';
import {
        GET_PURCHASES,
        UPDATE_PURCHASE_STATUS,
        DELETE_PURCHASE,
} from './purchase.types';
import {setSnackbarMessage, setSnackbarSeverity, setSnackbarVisibility} from '../snackbar/snackbar.actions';
import {SNACKBAR_MESSAGES} from '../../config';

function* handlePurchasesLoad() {
        try {
                yield put(showLoading());
                const purchases = yield call(getPurchases);
                yield put(setPurchases(purchases.data.getPurchases));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleUpdatePurchaseStatus({ payload }) {
        try {
                yield call(updatePurchaseStatus, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.success));
                yield put(setSnackbarVisibility(true));

                yield put(showLoading());
                const purchases = yield call(getPurchases);
                yield put(setPurchases(purchases.data.getPurchases));
                yield put(hideLoading());

        } catch (error) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.error));
                yield put(setSnackbarVisibility(true));
                console.log(error);
        }
}

function* handleDeletePurchase({ payload }) {
        try {
                yield call(deletePurchase, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.success));
                yield put(setSnackbarVisibility(true));


                yield put(showLoading());
                const purchases = yield call(getPurchases);
                yield put(setPurchases(purchases.data.getPurchases));
                yield put(hideLoading());

        } catch (error) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.error));
                yield put(setSnackbarVisibility(true));
                console.log(error);
        }
}

export default function* purchaseSaga() {
        yield takeEvery(GET_PURCHASES, handlePurchasesLoad);
        yield takeEvery(UPDATE_PURCHASE_STATUS, handleUpdatePurchaseStatus);
        yield takeEvery(DELETE_PURCHASE, handleDeletePurchase);
}
