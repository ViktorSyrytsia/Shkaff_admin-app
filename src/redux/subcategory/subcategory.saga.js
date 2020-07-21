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
        GET_SUBCATEGORY,
        GET_SUBCATEGORIES,
        ADD_SUBCATEGORY,
        UPDATE_SUBCATEGORY,
        DELETE_SUBCATEGORY,
} from './subcategory.types';

function* handleSubcategoryLoad({ payload }) {
        try {
                yield put(showLoading());
                const subcategories = yield call(getSubcategory, payload);
                yield put(setSubcategory(subcategories.data.getSubcategory));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleSubcategoriesLoad() {
        try {
                yield put(showLoading());
                const subcategories = yield call(getSubcategories, null);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleAddSubcategory({ payload }) {
        try {
                yield call(addSubcategory, payload);
                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());
        } catch (err) {
                console.log(err);
        }
}

function* handleUpdateSubcategory({ payload }) {
        try {
                yield call(updateSubcategory, payload);
                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

function* handleDeleteSubcategory({ payload }) {
        try {
                yield call(deleteSubcategory, payload);
                yield put(showLoading());
                const subcategories = yield call(getSubcategories);
                yield put(setSubcategories(subcategories.data.getSubcategories));
                yield put(hideLoading());
        } catch (error) {
                console.log(error);
        }
}

export default function* subcategorySaga() {
        yield takeEvery(GET_SUBCATEGORY, handleSubcategoryLoad);
        yield takeEvery(GET_SUBCATEGORIES, handleSubcategoriesLoad);
        yield takeEvery(ADD_SUBCATEGORY, handleAddSubcategory);
        yield takeEvery(UPDATE_SUBCATEGORY, handleUpdateSubcategory);
        yield takeEvery(DELETE_SUBCATEGORY, handleDeleteSubcategory);
}
