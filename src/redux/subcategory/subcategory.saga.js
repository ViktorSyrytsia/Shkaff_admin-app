import { takeEvery, call, put } from 'redux-saga/effects';

import {
        setSubcategories,
        showLoading,
        hideLoading
} from './subcategory.actions';
import {
        getSubcategories,
        addSubcategory,
        updateSubcategory,
        deleteSubcategory
} from '../../utils/subcategory';
import {
        GET_SUBCATEGORIES,
        ADD_SUBCATEGORY,
        UPDATE_SUBCATEGORY,
        DELETE_SUBCATEGORY,
} from './subcategory.types';
import {setSnackbarMessage, setSnackbarSeverity, setSnackbarVisibility} from "../snackbar/snackbar.actions";
import {SNACKBAR_MESSAGES} from "../../components/config";

function* handleSubcategoriesLoad() {
        try {
                console.log('saga')
                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleAddSubcategory({ payload }) {
        try {
                yield call(addSubcategory, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.add.success));
                yield put(setSnackbarVisibility(true));

                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());

        } catch (err) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.add.error));
                yield put(setSnackbarVisibility(true));
                console.log(err);
        }
}

function* handleUpdateSubcategory({ payload }) {
        try {
                yield call(updateSubcategory, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.success));
                yield put(setSnackbarVisibility(true));

                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());

        } catch (error) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.error));
                yield put(setSnackbarVisibility(true));
                console.log(error);
        }
}

function* handleDeleteSubcategory({ payload }) {
        try {
                yield call(deleteSubcategory, payload);

                yield put(setSnackbarSeverity('success'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.success));
                yield put(setSnackbarVisibility(true));


                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());

        } catch (error) {
                yield put(setSnackbarSeverity('error'));
                yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.error));
                yield put(setSnackbarVisibility(true));
                console.log(error);
        }
}

export default function* subcategorySaga() {
        yield takeEvery(GET_SUBCATEGORIES, handleSubcategoriesLoad);
        yield takeEvery(ADD_SUBCATEGORY, handleAddSubcategory);
        yield takeEvery(UPDATE_SUBCATEGORY, handleUpdateSubcategory);
        yield takeEvery(DELETE_SUBCATEGORY, handleDeleteSubcategory);
}
