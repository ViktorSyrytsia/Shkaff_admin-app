import {takeEvery, call, put} from 'redux-saga/effects';

import {
    setCategory,
    setCategories,
    showLoading,
    hideLoading
} from './category.actions';
import {
    setSnackbarMessage,
    setSnackbarSeverity,
    setSnackbarVisibility,
} from '../snackbar/snackbar.actions';
import {
    getCategory,
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
} from '../../utils/category';
import {
    GET_CATEGORY,
    GET_CATEGORIES,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from './category.types';

import {SNACKBAR_MESSAGES} from "../../components/config";

function* handleCategoryLoad({payload}) {
    try {
        yield put(showLoading());
        const categories = yield call(getCategory, payload);
        yield put(setCategory(categories.data.getCategory));
        yield put(hideLoading());
    } catch (error) {
        console.log(error);
    }
}

function* handleCategoriesLoad() {
    try {
        yield put(showLoading());
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
        yield put(hideLoading());
    } catch (error) {
        console.log(error);
    }
}

function* handleAddCategory({payload}) {
    try {
        yield call(addCategory, payload);
        yield put(setSnackbarSeverity('success'));
        yield put(setSnackbarMessage(SNACKBAR_MESSAGES.success));
        yield put(setSnackbarVisibility(true));
        yield put(showLoading());
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
        yield put(hideLoading());
    } catch (err) {
        console.log(err);
    }
}

function* handleUpdateCategory({payload}) {
    try {
        yield call(updateCategory, payload);
        yield put(showLoading());
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
        yield put(hideLoading());
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteCategory({payload}) {
    try {
        yield call(deleteCategory, payload);
        yield put(showLoading());
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
        yield put(hideLoading());
    } catch (error) {
        console.log(error);
    }
}

export default function* categorySaga() {
    yield takeEvery(GET_CATEGORY, handleCategoryLoad);
    yield takeEvery(GET_CATEGORIES, handleCategoriesLoad);
    yield takeEvery(ADD_CATEGORY, handleAddCategory);
    yield takeEvery(UPDATE_CATEGORY, handleUpdateCategory);
    yield takeEvery(DELETE_CATEGORY, handleDeleteCategory);
}
