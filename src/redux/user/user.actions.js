import {
    LOGIN_USER,
    SET_AUTH,
    LOGOUT_USER,
    CHECK_USER_BY_TOKEN,
    SET_AUTH_ERROR,
    SET_LOADING,
} from './user.types'

export const setAuth = (user) => ({
    type: SET_AUTH,
    payload: user
});

export const loginUser = (payload) => ({
    type: LOGIN_USER,
    payload
})

export const logoutUser = () => ({
    type: LOGOUT_USER
});

export const checkUserByToken = (token) => ({
    type: CHECK_USER_BY_TOKEN,
    payload: token
});

export const setAuthError = (error) => ({
    type: SET_AUTH_ERROR,
    payload: error
});

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
})
