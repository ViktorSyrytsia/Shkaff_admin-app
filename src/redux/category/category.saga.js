import {takeEvery, call, put} from 'redux-saga/effects';
import {setCategory, setCategories} from './category.actions';
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

function* handleCategoryLoad({payload}) {
    try {
        const categories = yield call(getCategory, payload);
        yield put(setCategory(categories.data.getCategory));
    } catch (error) {
        console.log(error);
    }
}

function* handleCategoriesLoad() {
    try {
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
    } catch (error) {
        console.log(error);
    }
}

function* handleAddCategory({payload}) {
    try {
        yield call(addCategory, payload);
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
    } catch (err) {
        console.log(err);
    }
}

function* handleUpdateCategory({payload}) {
    try {
        yield call(updateCategory, payload);
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
    } catch (error) {
        console.log(error);
    }
}

function* handleDeleteCategory({payload}) {
    try {
        yield call(deleteCategory, payload);
        const categories = yield call(getCategories);
        yield put(setCategories(categories.data.getCategories));
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
