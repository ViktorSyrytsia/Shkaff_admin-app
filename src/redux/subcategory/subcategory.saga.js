import { takeEvery, call, put } from 'redux-saga/effects';
import {
        setSubcategory,
        setSubcategories,
        showLoading,
        hideLoading
} from './subcategory.actions';
import {
        getSubcategory,
        getSubcategories,
        addSubcategory,
        updateSubcategory,
        deleteSubcategory
} from '../../utils/subcategory';
import {
        GET_CATEGORY,
        GET_CATEGORIES,
        ADD_CATEGORY,
        UPDATE_CATEGORY,
        DELETE_CATEGORY
} from './category.types';

function* handleCategoryLoad({ payload }) {
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
                const categories = yield call(getCategories, null);
                console.log(categories)
                yield put(setCategories(categories.data.getCategories));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleAddCategory({ payload }) {
        try {
                yield call(addCategory, payload);
                yield put(showLoading());
                const categories = yield call(getCategories);
                yield put(setCategories(categories.data.getCategories));
                yield put(hideLoading());
        } catch (err) {
                console.log(err);
        }
}

function* handleUpdateCategory({ payload }) {
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

function* handleDeleteCategory({ payload }) {
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
