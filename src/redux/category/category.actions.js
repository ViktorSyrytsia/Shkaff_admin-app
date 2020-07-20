import {
    SET_CATEGORY,
    SET_CATEGORIES,
} from './category.types'

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: category
})

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
})
