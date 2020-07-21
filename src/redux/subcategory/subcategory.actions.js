import {
        SET_SUBCATEGORY,
        GET_SUBCATEGORY,
        SET_SUBCATEGORIES,
        GET__SUBCATEGORIES,
        ADD_SUBCATEGORY,
        UPDATE_SUBCATEGORY,
        DELETE_SUBCATEGORY,
        SHOW_LOADING,
        HIDE_LOADING,
        SELECT_SUBCATEGORY
} from './subcategory.types'

export const setSubcategory = (category) => ({
        type: SET_SUBCATEGORY,
        payload: category
})

export const getSubcategory = (payload) => ({
        type: GET_SUBCATEGORY,
        payload
})

export const setSubcategories = (categories) => ({
        type: SET_SUBCATEGORIES,
        payload: categories
})

export const getSubcategories = () => ({
        type: GET__SUBCATEGORIES
})

export const addSubcategory = (payload) => ({
        type: ADD_SUBCATEGORY,
        payload
})

export const updateSubcategory = (payload) => ({
        type: UPDATE_SUBCATEGORY,
        payload
})

export const deleteSubcategory = (payload) => ({
        type: DELETE_SUBCATEGORY,
        payload
})

export const showLoading = () => ({
        type: SHOW_LOADING
})

export const hideLoading = () => ({
        type: HIDE_LOADING
})

export const selectSubcategory = (payload) => ({
        type: SELECT_SUBCATEGORY,
        payload
})