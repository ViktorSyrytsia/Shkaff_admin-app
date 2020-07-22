import {
        SET_SUBCATEGORY,
        SET_SUBCATEGORIES,
        GET_SUBCATEGORIES,
        ADD_SUBCATEGORY,
        UPDATE_SUBCATEGORY,
        DELETE_SUBCATEGORY,
        SHOW_LOADING,
        HIDE_LOADING
} from './subcategory.types'

export const setSubcategory = (subcategory) => ({
        type: SET_SUBCATEGORY,
        payload: subcategory
})

export const setSubcategories = (categories) => ({
        type: SET_SUBCATEGORIES,
        payload: categories
})

export const getSubcategories = () => ({
        type: GET_SUBCATEGORIES
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
