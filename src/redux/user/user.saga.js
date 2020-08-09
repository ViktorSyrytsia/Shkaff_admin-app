import {takeEvery, call, put} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
    setAuth,
    setAuthError,
    setLoading,
} from './user.actions';
import {
    setSnackbarMessage,
    setSnackbarSeverity,
    setSnackbarVisibility,
} from '../snackbar/snackbar.actions';
import {
    CHECK_USER_BY_TOKEN,
    LOGIN_USER
} from './user.types';
import {
    loginUser,
    getUserByToken
} from '../../services/user'
import {SNACKBAR_MESSAGES} from "../../config";

function* handleUserLoad({ payload }) {
    try {
        yield put(setLoading(true));
        const admin = yield call(loginUser, payload);

        yield put(setSnackbarSeverity('success'));
        yield put(setSnackbarMessage(SNACKBAR_MESSAGES.login.success));
        yield put(setSnackbarVisibility(true));

        localStorage.setItem('AUTH_TOKEN', admin.token);
        yield put(setAuth({auth: true, userName: admin.name}));

        yield put(setLoading(false));
        yield put(push('/categories'));

    } catch (error) {
        yield put(setLoading(false));
        yield put(setSnackbarSeverity('error'));
        yield put(setSnackbarMessage(error.graphQLErrors[0].message));
        yield put(setSnackbarVisibility(true));
        yield put(setAuthError(error));
    }
}

function* handleCheckUserByToken() {
    try {
        console.log('wtf')
        const authToken = localStorage.getItem('AUTH_TOKEN');
        yield put(setLoading(true));

        if (!authToken) {
            yield put(setLoading(false));
            yield put(setAuth({auth: false, userName: null}));
            yield put(push('/'));
            return;
        }
        const user = yield call(getUserByToken, authToken);
        yield put(setAuth({auth: true, userName: user.name}));
        yield put(setLoading(false));
        yield put(push('/categories'));
    } catch (error) {
        yield put(setLoading(false));
        yield put(setAuth(false));
        localStorage.removeItem('AUTH_TOKEN');
        yield put(push('/'));
    }
}

function* handleUpdateCategory({payload}) {
    try {

    } catch (error) {
        yield put(setSnackbarSeverity('error'));
        yield put(setSnackbarMessage(SNACKBAR_MESSAGES.update.error));
        yield put(setSnackbarVisibility(true));
        console.log(error);
    }
}

function* handleDeleteCategory({payload}) {
    try {


    } catch (error) {
        yield put(setSnackbarSeverity('error'));
        yield put(setSnackbarMessage(SNACKBAR_MESSAGES.delete.error));
        yield put(setSnackbarVisibility(true));
        console.log(error);
    }
}

export default function* userSaga() {
    yield takeEvery(LOGIN_USER, handleUserLoad)
    yield takeEvery(CHECK_USER_BY_TOKEN, handleCheckUserByToken)
}
