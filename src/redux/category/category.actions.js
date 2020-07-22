import {
    SET_CATEGORY,
    GET_CATEGORY,
    SET_CATEGORIES,
    GET_CATEGORIES,
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    SHOW_LOADING,
    HIDE_LOADING,
    SELECT_CATEGORY
} from './category.types'

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

export const getCategory = (payload) => ({
    type: GET_CATEGORY,
    payload
})

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
})

export const getCategories = () => ({
    type: GET_CATEGORIES
})

export const addCategory = (payload) => ({
    type: ADD_CATEGORY,
    payload
})

export const updateCategory = (payload) => ({
    type: UPDATE_CATEGORY,
    payload
})

export const deleteCategory = (payload) => ({
    type: DELETE_CATEGORY,
    payload
})

export const showLoading = () => ({
    type: SHOW_LOADING
})

export const hideLoading = () => ({
    type: HIDE_LOADING
})
